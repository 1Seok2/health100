/**
 * url에 따라 나타내는 tmPose가 달라짐
 * 측정 후 운동횟수 데이터로 저장
 */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Container,
  Assist,
  CamContainer,
  CamMessage,
  Count,
  Status,
  ExerciseButton,
  TimeInput,
} from './TurnOnWebCam.styled';

import Loading from 'components/modules/loading';
import IsNumber from 'components/modules/check/IsNumber';
import { FirebaseStore } from 'config/fbConfig';

let model,
  webcam,
  ctx,
  labelContainer,
  maxPredictions,
  status = 'default';

const userPose = {
  default: 'default',
  correct: 'correct',
  wrong: 'wrong',
};

const TurnOnWebCam = ({ userObj, title, URL, count, setCount }) => {
  const [start, setStart] = useState({
    is: false,
    time: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showStatus, setShow] = useState(false);
  const [times, setTimes] = useState({
    start: 0,
    end: 0,
  });

  // timer
  const [time, setTime] = useState(moment.duration(0));
  const [timeTick, setTimeTick] = useState(null);
  const [readyDown, setReadyDown] = useState('');
  const [countDown, setCountDown] = useState('');

  const startTimer = (times) => {
    var duration = moment.duration({
      seconds: countDown,
    });

    var timestamp = new Date(0, 0, 0, 0, 0, countDown);
    var interval = 1;
    var timer = setInterval(function () {
      timestamp = new Date(timestamp.getTime() - interval * 1000);

      duration = moment.duration(duration.asSeconds() - interval, 'seconds');
      setCountDown(Math.round(duration.asSeconds()));
      //.asSeconds()
      if (duration.asSeconds() === 0) {
        clearInterval(timer);
        SaveCounts(times);
      }
    }, 1000);
  };

  const readyTimer = (times) => {
    var duration = moment.duration({
      seconds: readyDown,
    });

    var timestamp = new Date(0, 0, 0, 0, 0, readyDown);
    var interval = 1;
    var timer = setInterval(function () {
      timestamp = new Date(timestamp.getTime() - interval * 1000);

      duration = moment.duration(duration.asSeconds() - interval, 'seconds');
      setReadyDown(Math.round(duration.asSeconds()));
      //.asSeconds()
      if (duration.asSeconds() === 0) {
        clearInterval(timer);
        startTimer(times);
      }
    }, 1000);
  };

  useEffect(() => {
    setCount(0);
  }, [title]);

  const init = async () => {
    setStart({
      ...start,
      is: true,
      time: Date.now(),
    });
    readyTimer(Date.now());
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await window.tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 400;
    const flip = true; // whether to flip the webcam
    webcam = new window.tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup().then(() => setIsLoading(false)); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById('canvas');
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext('2d');
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement('div'));
    }
  };

  const loop = async (timestamp) => {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    /* if squat ... */
    if (prediction[0].probability.toFixed(2) > 0.9) {
      if (status === userPose.correct) {
        setCount((prev) => prev + 1);
        /* audio ... ? */
      }
      status = userPose.default;
    } else if (prediction[1].probability.toFixed(2) > 0.9) {
      status = userPose.correct;
    } else if (prediction[2].probability.toFixed(2) > 0.95) {
      if (
        status.pose === userPose.correct ||
        status.pose === userPose.default
      ) {
        /* its wrong ... */
      }
      status = userPose.wrong;
    }

    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }

    // finally draw the poses
    drawPose(pose);
  };

  const stop = () => {
    setStart({
      ...start,
      is: false,
    });
    webcam.stop();
  };

  const drawPose = (pose) => {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0);
      // draw the keypoints and skeleton
      if (pose) {
        const minPartConfidence = 0.5;
        window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  /* save counts in firebaseStore */
  const SaveCounts = (times) => {
    stop();
    FirebaseStore.collection(`${userObj.uid}`)
      .doc(`${Date.now()}`)
      .set({
        userId: userObj.uid,
        email: userObj.email,
        exercise: title,
        count: count,
        createdAt: Date.now(),
        duration: Date.now() - times - readyDown * 1000 - 1000,
      });
    setCount(0);
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (IsNumber(value)) {
      if (name === 'count') {
        setCountDown(value);
      }
      if (name === 'ready') {
        setReadyDown(value);
      }
    }
  };

  return (
    <>
      <Container>
        <CamContainer>
          {!start.is ? (
            <CamMessage>캠을 켜주세요</CamMessage>
          ) : (
            <>
              <canvas id="canvas"></canvas>
              {isLoading && <Loading />}
            </>
          )}
        </CamContainer>
        <Assist>
          {!start.is && (
            <div>
              <h5>목표시간설정</h5>

              <div
                style={{
                  fontSize: 10,
                  fontFamily: 'Nanum Gothic',
                  marginTop: 8,
                  lineHeight: '14px',
                }}
              >
                웹캠이 켜지는 시간과 운동 준비를 마칠 권장 시간은 10초 입니다.
                <br />
                준비시간이 끝난 후 운동시간이 측정됩니다.
              </div>
              <TimeInput
                type="ready"
                name="ready"
                value={readyDown}
                onChange={onChange}
                placeholder="준비시간(초)"
              />

              <TimeInput
                type="count"
                name="count"
                value={countDown}
                onChange={onChange}
                placeholder="운동시간(초)"
              />
            </div>
          )}
          {start.is && (
            <div
              style={{
                marginBottom: 24,
                fontSize: 28,
                color: '#555',
                fontFamily: 'Nanum Gothic',
              }}
            >
              {readyDown === 0 ? '남은 운동' : '남은 준비'} 시간 :{' '}
              {readyDown === 0 ? countDown : readyDown} 초
              <br />
            </div>
          )}
          {start.is && (
            <Count style={{ fontSize: 18, fontFamily: 'Nanum Gothic' }}>
              운동 횟수 :{' '}
              <span style={{ fontSize: 38, fontFamily: 'Nanum Gothic' }}>
                {count}
              </span>{' '}
              회
            </Count>
          )}
          <Status display={showStatus && start} id="label-container"></Status>
        </Assist>
      </Container>
      {!start.is ? (
        <ExerciseButton
          onClick={() => {
            if (Number(readyDown) < 10) {
              alert('준비시간은 최소 10초입니다.');
              return;
            }
            if (Number(countDown) < 5) {
              alert('운동시간은 최소 5초입니다.');
              return;
            }
            init();
          }}
        >
          운동 시작하기
        </ExerciseButton>
      ) : (
        <ExerciseButton onClick={() => SaveCounts()}>
          결과 저장하기
        </ExerciseButton>
      )}
    </>
  );
};

export default TurnOnWebCam;

/**
 * url에 따라 나타내는 tmPose가 달라짐
 * 측정 후 운동횟수 데이터로 저장
 */

import React, { useEffect, useState } from 'react';
import {
  CamContainer,
  CamMessage,
  Count,
  Status,
  ExerciseButton,
} from './TurnOnWebCam.styled';
import Loading from 'components/modules/loading';
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
  const [start, setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showStatus, setShow] = useState(false);
  const [times, setTimes] = useState({
    start: 0,
    end: 0,
  });
  useEffect(() => {
    setCount(0);
  }, [title]);

  const init = async () => {
    setStart(true);
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await window.tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 300;
    const flip = true; // whether to flip the webcam
    webcam = new window.tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup().then(() => setIsLoading(false)); // request access to the webcam
    await webcam.play().then(() =>
      setTimes({
        ...times,
        start: Date.now(),
      }),
    );
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
    setStart(false);
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
  const SaveCounts = async () => {
    stop();
    await FirebaseStore.collection(`${userObj.uid}`)
      .doc(`${Date.now()}`)
      .set({
        userId: userObj.uid,
        email: userObj.email,
        exercise: title,
        count: count,
        createdAt: Date.now(),
        duration: Date.now() - times.start,
      });
    setCount(0);
  };

  return (
    <>
      <CamContainer>
        {!start ? (
          <CamMessage>캠을 켜주세요</CamMessage>
        ) : (
          <>
            <canvas id="canvas"></canvas>
            {isLoading && <Loading />}
          </>
        )}
      </CamContainer>
      {start && (
        <Status fSize={16} display={start} onClick={() => setShow(!showStatus)}>
          상태보기
        </Status>
      )}
      <Status display={showStatus && start} id="label-container"></Status>
      <Count style={{ fontSize: 30 }}>운동 횟수 : {count} 회</Count>
      {/* <div style={{ fontSize: 30 }}>{status}</div> */}
      {!start ? (
        <ExerciseButton onClick={() => init()}>운동 시작하기</ExerciseButton>
      ) : (
        <ExerciseButton bgColor="#8854d0" onClick={() => SaveCounts()}>
          결과 저장하기
        </ExerciseButton>
      )}
    </>
  );
};

export default TurnOnWebCam;

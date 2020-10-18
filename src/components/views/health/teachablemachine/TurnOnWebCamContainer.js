/**
 * @description url에 따라 나타내는 tmPose가 달라짐
 *              측정 후 운동횟수 데이터로 저장
 */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FirebaseStore } from 'config/fbConfig';

import TurnOnWebCamPresenter from './TurnOnWebCamPresenter';

import IsNumber from 'components/modules/check/IsNumber';

/* 운동 횟수 세 줄 kakao 음성 */
import audio1 from 'assets/audio/1.mp3';
import audio2 from 'assets/audio/2.mp3';
import audio3 from 'assets/audio/3.mp3';
import audio4 from 'assets/audio/4.mp3';
import audio5 from 'assets/audio/5.mp3';
import audio6 from 'assets/audio/6.mp3';
import audio7 from 'assets/audio/7.mp3';
import audio8 from 'assets/audio/8.mp3';
import audio9 from 'assets/audio/9.mp3';
import audio0 from 'assets/audio/0.mp3';
import audioWrong from 'assets/audio/wrong.mp3';

const audioList = [
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio0,
];

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

const TurnOnWebCamConatiner = ({ userObj, title, URL }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState({
    is: false,
    time: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showStatus, setShow] = useState(false);

  // timer
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

    if (Date.now() >= start.time + readyDown * 1000) {
      /* if squat ... */
      if (prediction[0].probability.toFixed(2) > 0.9) {
        if (status === userPose.correct) {
          /* audio ... ? */

          setCount((prev) => {
            const audio = new Audio(audioList[prev % 10]);
            audio.play();
            return prev + 1;
          });
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
          const audio = new Audio(audioWrong);
          audio.play();
        }
        status = userPose.wrong;
      }
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
    let counts = 0;
    setCount((prev) => {
      counts = prev;
      return prev;
    });
    FirebaseStore.collection(`${userObj.uid}`)
      .doc(`${Date.now()}`)
      .set({
        userId: userObj.uid,
        email: userObj.email,
        exercise: title,
        count: counts,
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
    <TurnOnWebCamPresenter
      start={start}
      isLoading={isLoading}
      readyDown={readyDown}
      onChange={onChange}
      countDown={countDown}
      showStatus={showStatus}
      count={count}
      init={init}
      SaveCounts={SaveCounts}
    />
  );
};

export default TurnOnWebCamConatiner;

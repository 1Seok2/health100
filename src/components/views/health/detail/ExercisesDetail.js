import React, { useEffect } from 'react';
import Squat from '../../../../assets/ai/squat/Squat';
import { CloseButton, Container } from './ExercisesDetail.styled';

const ExercisesDetail = ({ showDetail, setShow }) => {
  const closeDetail = () => {
    setShow({
      ...showDetail,
      show: false,
    });
  };
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      // canvas.pause();
      // canvas.src = '';
      // window.localstream.stop();
      while (canvas?.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
      }
    }
  });
  return (
    <Container show={showDetail.show}>
      <CloseButton onClick={() => closeDetail()}>&#215;</CloseButton>
      <div>{showDetail.title || null}</div>
      {showDetail.title === '스쿼트' ? <Squat /> : null}
    </Container>
  );
};

export default ExercisesDetail;

/**
 * 새로운 운동 추가 시 assets/ai에 추가 후 불러와야하는 페이지
 * webcam stop, init 관리 추가적으로 필요
 */

import React, { useEffect } from 'react';
import { Squat } from 'assets/ai/squat';
import { CloseButton, Container } from './ExercisesDetail.styled';
import Ex1 from 'assets/ai/ex1';

const ExercisesDetail = ({ showDetail, setShow }) => {
  const closeDetail = () => {
    setShow({
      ...showDetail,
      show: false,
    });
  };
  useEffect(() => {}, [showDetail.title]);
  return (
    <Container show={showDetail.show}>
      <CloseButton onClick={() => closeDetail()}>&#215;</CloseButton>
      <div>{showDetail.title || null}</div>
      {showDetail.title === '스쿼트' ||
      showDetail.title === '다른' ||
      showDetail.title === '다른1' ? (
        <Squat />
      ) : (
        <Ex1 />
      )}
    </Container>
  );
};

export default ExercisesDetail;

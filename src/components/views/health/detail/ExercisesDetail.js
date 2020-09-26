/**
 * 새로운 운동 추가 시 assets/ai에 URL 추가 후 불러와야하는 페이지
 * webcam stop, init 관리 추가적으로 필요
 */

import React, { useEffect } from 'react';
import { CloseButton, Container } from './ExercisesDetail.styled';
import TurnOnWebCam from '../teachablemachine';

/* URLs ... */
import { SquatURL } from 'assets/ai/squat/SquatUrl';
import { Ex1URL } from 'assets/ai/ex1/Ex1Url';

const ExercisesDetail = ({ userObj, showDetail, setShow, setCount, count }) => {
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
        <TurnOnWebCam
          userObj={userObj}
          title={showDetail.title}
          URL={SquatURL}
          setCount={setCount}
          count={count}
        />
      ) : (
        <TurnOnWebCam URL={Ex1URL} setCount={setCount} count={count} />
      )}
    </Container>
  );
};

export default ExercisesDetail;

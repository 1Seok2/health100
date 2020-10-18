/**
 * @description 새로운 운동 추가 시 assets/ai에 URL 추가 후 불러와야하는 페이지
 *              webcam stop, init 관리 추가적으로 필요
 */

import React, { useEffect, useState } from 'react';
import { CloseButton, Container, Title } from './ExercisesDetail.styled';

import TurnOnWebCam from '../teachablemachine';

/* URLs ... */
import { SquatURL } from 'assets/ai/squat/SquatUrl';

const ExercisesDetail = ({ userObj, showDetail, setShow }) => {
  const [count, setCount] = useState(0);
  const closeDetail = () => {
    setShow({
      ...showDetail,
      title: '',
      imgSrc: '',
      show: false,
    });
  };
  useEffect(() => {}, [showDetail.title]);
  return (
    <Container show={showDetail.show}>
      <CloseButton onClick={() => closeDetail()}>&#215;</CloseButton>
      <Title>{showDetail.title}</Title>
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
        // <TurnOnWebCam URL={Ex1URL} setCount={setCount} count={count} />
        <TurnOnWebCam
          userObj={userObj}
          title={showDetail.title}
          URL={SquatURL}
          setCount={setCount}
          count={count}
        />
      )}
    </Container>
  );
};

export default ExercisesDetail;

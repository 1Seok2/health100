import React, { useState } from 'react';
import ExercisesItem from './exercises';
import ExercisesDetail from './detail';
import { Container } from './Health.styled';

const Health = () => {
  const [showDetail, setShow] = useState({
    show: false,
    // branch : branch,   다른 해당 운동에 대한 정보들
    // unit : unit,
  });
  return (
    <Container>
      <ExercisesItem showDetail={showDetail} setShow={setShow} />
      {showDetail.show && (
        <ExercisesDetail showDetail={showDetail} setShow={setShow} />
      )}
    </Container>
  );
};

export default Health;

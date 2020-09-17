import React from 'react';
import { CloseButton, Container } from './ExercisesDetail.styled';

const ExercisesDetail = ({ showDetail, setShow }) => {
  const closeDetail = () => {
    setShow({
      ...showDetail,
      show: false,
    });
  };
  return (
    <Container>
      <CloseButton onClick={() => closeDetail()}>&#215;</CloseButton>
      <div>{showDetail.title}</div>
    </Container>
  );
};

export default ExercisesDetail;

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
      <div>detail</div>
    </Container>
  );
};

export default ExercisesDetail;

import React from 'react';
import { Container, DescWrapper, BranchName } from './ExercisesItem.styled';
import GetRandomColor from 'components/modules/style/RandomColor';

/* show flat list about applied exercises */
const ExercisesItem = ({ showDetail, setShow, item }) => {
  const clickList = () => {
    setShow({
      ...showDetail,
      show: true,
      title: item.title,
      imgSrc: item.imgSrc,
    });
  };

  return (
    <Container
      onClick={() => clickList()}
      show={showDetail.show}
      current={showDetail.title === item.title}
      opacity={Math.random() * 0.5 + 0.1}
    >
      <DescWrapper>
        <BranchName current={showDetail.title === item.title}>
          {item.title}
        </BranchName>
      </DescWrapper>
    </Container>
  );
};

export default ExercisesItem;

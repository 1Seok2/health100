import React from 'react';
import { Container, DescWrapper, BranchName } from './ExercisesItem.styled';
import GetRandomColor from 'components/modules/style/RandomColor';

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

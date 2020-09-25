import React from 'react';
import { Container, DescWrapper, BranchName } from './ExercisesItem.styled';
import GetRandomColor from 'components/modules/style/RandomColor';

console.log(`#${(parseInt('2e98d9', 16) * Math.random() * 1).toString(16)}`);
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
    <Container onClick={() => clickList()} show={showDetail.show}>
      <DescWrapper>
        <BranchName>{item.title}</BranchName>
      </DescWrapper>
      {/* <ImageWrapper> */}
      {/* <Image
          src={`https://cdn.myzzym.com/myzzym/images/branch/${branch.id}/${unit[0].id}/${unit[0].unitImage[0].fileName}`}
        /> */}
      {/* </ImageWrapper> */}
    </Container>
  );
};

export default ExercisesItem;

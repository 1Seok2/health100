import React from 'react';
import {
  Wrapper,
  Container,
  DescWrapper,
  BranchName,
  ImageWrapper,
  Image,
  UnitName,
  ShowDetail,
  UnitDate,
} from './ExercisesItem.styled';

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
    <Container onClick={() => clickList()} width={showDetail.show ? 438 : null}>
      <ImageWrapper>
        {/* <Image
          src={`https://cdn.myzzym.com/myzzym/images/branch/${branch.id}/${unit[0].id}/${unit[0].unitImage[0].fileName}`}
        /> */}
      </ImageWrapper>
      <DescWrapper width={showDetail.show ? 324 : null}>
        <BranchName>{item.title}</BranchName>
        {/* <UnitName>
          신청인 : {branch.user.userFirstName} {branch.user.userLastName}
        </UnitName> */}
        <ShowDetail>운동하기 &#62;</ShowDetail>
        {/* <UnitDate>
          검수신청일 : {branch.modifiedDate.split('T')[0]}
        </UnitDate> */}
      </DescWrapper>
    </Container>
  );
};

export default ExercisesItem;

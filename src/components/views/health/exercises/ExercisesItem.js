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
import { list } from './List';

const ExercisesItem = ({ showDetail, setShow }) => {
  const clickList = (item) => {
    setShow({
      ...showDetail,
      show: true,
      title: item.title,
      imgSrc: item.imgSrc,
    });
  };

  return (
    <Wrapper width={showDetail.show ? 488 : null}>
      {list.map((item) => (
        <Container
          key={item.title}
          onClick={(item) => clickList(item)}
          width={showDetail.show ? 438 : null}
        >
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
      ))}
    </Wrapper>
  );
};

export default ExercisesItem;

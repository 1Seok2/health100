/**
 * @description 처음 운동 목록 표시
 */

import React from 'react';
import {
  Container,
  DescWrapper,
  BranchName,
  ImgContainer,
  DescTitle,
} from './ExercisesItem.styled';
import './Descript.css';

/* show flat list about applied exercises */
const ExercisesItem = ({ showDetail, setShow, item, idx }) => {
  const clickList = () => {
    setShow({
      ...showDetail,
      show: true,
      title: item.title,
      imgSrc: item.imgSrc,
    });
  };
  console.log(idx);
  return (
    <Container
      onClick={() => clickList()}
      show={showDetail.show}
      current={showDetail.title === item.title}
      opacity={Math.random() * 0.3 + 0.1}
      idx={idx}
    >
      <DescWrapper>
        <BranchName current={showDetail.title === item.title}>
          {item.title}
        </BranchName>
      </DescWrapper>
      <div className={idx}>
        <DescTitle>{item.title} 운동방법</DescTitle>
        <ImgContainer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '180px',
          }}
        >
          {item.imgSrc.map((src) => (
            <img src={src} alt={src} width="31%" height="180px" />
          ))}
        </ImgContainer>
        {item.desc}
      </div>
    </Container>
  );
};

export default ExercisesItem;

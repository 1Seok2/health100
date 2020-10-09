import React, { useState } from 'react';
import { Wrapper, Container, Title, ModeButton } from './Health.styled';
import { adultlist, grandlist } from './exercises/List';

import ExercisesItem from './exercises';
import ExercisesDetail from './detail';

const Health = ({ userObj }) => {
  const [isAdult, setAdult] = useState(true);

  const [showDetail, setShow] = useState({
    show: false,
    // branch : branch,   다른 해당 운동에 대한 정보들
    // unit : unit,
  });

  return (
    <Container>
      <Wrapper show={showDetail.show}>
        <Title>
          셀프 헬스
          <ModeButton onClick={() => setAdult(!isAdult)} style={{}}>
            | &nbsp;&nbsp;
            {isAdult ? '청년모드' : '노년모드'}
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            {isAdult ? '노년모드로 전환' : '청년모드로 전환'}
          </ModeButton>
        </Title>
        {isAdult
          ? adultlist.map((item) => (
              <ExercisesItem
                key={item.title}
                item={item}
                showDetail={showDetail}
                setShow={setShow}
              />
            ))
          : grandlist.map((item) => (
              <ExercisesItem
                key={item.title}
                item={item}
                showDetail={showDetail}
                setShow={setShow}
              />
            ))}
      </Wrapper>
      {showDetail.show && (
        <ExercisesDetail
          userObj={userObj}
          showDetail={showDetail}
          setShow={setShow}
        />
      )}
    </Container>
  );
};

export default Health;

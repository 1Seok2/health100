import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (parseInt(userObj.age) >= 65) setAdult(false);
  }, []);

  return (
    <Container>
      <Wrapper show={showDetail.show}>
        <Title>
          셀프 헬스
          <ModeButton>
            | &nbsp;&nbsp;
            {isAdult ? '청년모드' : '노년모드'}
          </ModeButton>
        </Title>
        {isAdult
          ? adultlist.map((item, idx) => (
              <ExercisesItem
                idx={`adult-${idx}`}
                key={item.title}
                item={item}
                showDetail={showDetail}
                setShow={setShow}
              />
            ))
          : grandlist.map((item, idx) => (
              <ExercisesItem
                idx={`grand-${idx}`}
                key={item.title}
                item={item}
                showDetail={showDetail}
                setShow={setShow}
              />
            ))}
        <div style={{ height: 40 }} />
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

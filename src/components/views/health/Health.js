import React, { useState } from 'react';
import { Wrapper, Container } from './Health.styled';
import { adultlist } from './exercises/List';

import ExercisesItem from './exercises';
import ExercisesDetail from './detail';

const Health = ({ userObj }) => {
  const [showDetail, setShow] = useState({
    show: false,
    // branch : branch,   다른 해당 운동에 대한 정보들
    // unit : unit,
  });

  return (
    <Container>
      <Wrapper show={showDetail.show}>
        {adultlist.map((item) => (
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

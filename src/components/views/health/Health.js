import React, { useState, useEffect } from 'react';
import ExercisesItem from './exercises';
import ExercisesDetail from './detail';
import { Wrapper, Container } from './Health.styled';
import { list } from './exercises/List';

const Health = ({ userObj }) => {
  const [showDetail, setShow] = useState({
    show: false,
    // branch : branch,   다른 해당 운동에 대한 정보들
    // unit : unit,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    // return WebCam && WebCam.stop();
  }, []);
  return (
    <Container>
      <Wrapper show={showDetail.show}>
        {list.map((item) => (
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
          setCount={setCount}
          count={count}
        />
      )}
    </Container>
  );
};

export default Health;

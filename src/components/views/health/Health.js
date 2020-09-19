import React, { useState, useEffect } from 'react';
import ExercisesItem from './exercises';
import ExercisesDetail from './detail';
import { Wrapper, Container } from './Health.styled';
import { list } from './exercises/List';
import AiScript from '../../../assets/ai/AiScript';

const Health = () => {
  const [showDetail, setShow] = useState({
    show: false,
    // branch : branch,   다른 해당 운동에 대한 정보들
    // unit : unit,
  });

  useEffect(() => {
    AiScript();
  }, []);
  return (
    <Container>
      <Wrapper width={showDetail.show ? 488 : null}>
        {list.map((item) => (
          <ExercisesItem
            key={item.title}
            item={item}
            showDetail={showDetail}
            setShow={setShow}
          />
        ))}
      </Wrapper>
      {/* {showDetail.show && ( */}
      <ExercisesDetail showDetail={showDetail} setShow={setShow} />
      {/* )} */}
    </Container>
  );
};

export default Health;

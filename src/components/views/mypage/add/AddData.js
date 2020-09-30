import React, { useState } from 'react';
import { Container, Wrapper } from './AddData.styled';
import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';

const AddData = ({ userObj }) => {
  const [count, setCount] = useState('');
  const [second, setSecond] = useState('');

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    switch (name) {
      case 'count':
        setCount(value);
        break;
      case 'second':
        setSecond(value);
        break;
      default:
    }
  };

  return (
    <Container>
      <Wrapper>
        <div>
          <select id="title" defaultValue={EXERCISE_LIST[0]}>
            {EXERCISE_LIST.map((title) => (
              <option value={title}>{title}</option>
            ))}
          </select>
          <input
            type="count"
            name="count"
            value={count}
            onChange={onChange}
            placeholder="운동 횟수(개)"
          />
          <input
            type="second"
            name="second"
            value={second}
            onChange={onChange}
            placeholder="걸린 시간(초)"
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default AddData;

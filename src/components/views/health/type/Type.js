import React from 'react';
import { Wrapper, SelectType, Desc } from './Type.styled';

const Type = () => {
  return (
    <Wrapper>
      <SelectType>
        <Desc>
          청소년 <br />& <br /> 성인 <br /> 65세 미만
        </Desc>
      </SelectType>
      <SelectType>
        <Desc>
          노인 <br />
          (65세 이상){' '}
        </Desc>
      </SelectType>
    </Wrapper>
  );
};

export default Type;

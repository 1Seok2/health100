import styled from 'styled-components';
import {
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const UserEnrollInfo = styled.h2`
  font-weight: 200;
  font-size: 24px;
  line-height: 36px;
  margin-top: 1rem;
`;

export const GoReEnrollButton = styled.button`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  background-color: ${NEGATIVE_COLOR};
  color: white;
  &:hover {
    background-color: ${NEGATIVE_COLOR_LIGHT};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
`;

export const SForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const SLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.h3`
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 12px;
  width: 100%;
`;

export const STextArea = styled.textarea`
  width: 90%;
  height: 40%;
  min-height: 160px;
  padding: 1rem;
  font-weight: 300;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${NEGATIVE_COLOR_LIGHT};
  }
`;

export const StringLength = styled.h5`
  font-weight: 200;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  margin-bottom: 12px;
  text-align: right;
`;

export const STextInput = styled.input`
  border: none;
  outline: none;
  font-weight: 300;
  border-bottom: 1px solid #bbb;
  width: 90%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${NEGATIVE_COLOR_LIGHT};
  }
`;

export const SButton = styled.button`
  background-color: ${HEALTH_COLOR};
  color: white;
  font-weight: 200;
  float: right;
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
  }
`;

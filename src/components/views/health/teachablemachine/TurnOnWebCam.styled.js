import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  NEGATIVE_COLOR,
} from 'components/modules/style/Color';

export const CamContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  justify-content: center;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

export const CamMessage = styled.h4`
  font-weight: 500;
  font-size: 32px;
  font-family: 'Jua', sans-serif;
`;

export const Count = styled.h2`
  padding-left: 10%;
  font-weight: 500;
  margin-top: 20px;
  font-family: 'Jua', sans-serif;
`;

export const Status = styled.h3`
  display: ${(props) => (props.display ? 'block' : 'none')};
  font-weight: 500;
  padding-left: 10%;
  margin-top: 20px;
  font-size: ${(props) => (props.fSize ? props.fSize : 28)}px;
  font-family: 'Jua', sans-serif;
`;

export const ExerciseButton = styled.a`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  width: 180px;
  height: 42px;
  font-weight: 400;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  color: white;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : HEALTH_COLOR_DARK};
  border-radius: 21px;
  box-shadow: 0px 6px 10px -6px rgb(100, 100, 100);
  transition: background-color 0.3s;
  font-family: 'Jua', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.bgColor ? NEGATIVE_COLOR : HEALTH_COLOR};
    transition: background-color 0.2s;
  }
`;

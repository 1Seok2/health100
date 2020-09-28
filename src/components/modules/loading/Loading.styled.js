import styled, { keyframes } from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
} from '../style/Color';

const key1 = keyframes`
0% {
  background-color: ${HEALTH_COLOR_DARK};
}
33% {
  background-color : ${HEALTH_COLOR};
}
50% {
  background-color: ${HEALTH_COLOR_LIGHT};
}
83% {
  background-color: ${HEALTH_COLOR};
}
100% {
  background-color: ${HEALTH_COLOR_DARK};
}
`;

const key2 = keyframes`
0% {
  background-color: ${HEALTH_COLOR};
}
17% {
  background-color : ${HEALTH_COLOR_LIGHT};
}
50% {
  background-color: ${HEALTH_COLOR};
}
83% {
  background-color: ${HEALTH_COLOR_DARK};
}
100% {
  background-color: ${HEALTH_COLOR};
}
`;

const key3 = keyframes`
0% {
  background-color: ${HEALTH_COLOR_LIGHT};
}
17% {
  background-color : ${HEALTH_COLOR};
}
50% {
  background-color: ${HEALTH_COLOR_DARK};
}
83% {
  background-color: ${HEALTH_COLOR};
}
100% {
  background-color: ${HEALTH_COLOR_LIGHT};
}
`;

export const LoadingContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 2px;
  border-radius: 6px;
  animation: ${(props) =>
      props.typeKey === 'key1' ? key1 : props.typeKey === 'key2' ? key2 : key3}
    0.5s infinite;
`;

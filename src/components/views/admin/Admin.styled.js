import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Containter = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  overflow: hidden;
  position: relative;
  padding-bottom: 2rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding-top: 1.7rem;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
  overflow: scroll;
  position: relative;
`;

export const TypeButton = styled.button`
  color: #aaa;
  font-weight: 400;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
    transition: background-color 0.3s;
  }
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)};
  ${(props) => (props.current ? `color : white;` : null)};
  margin-right: 8px;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;

export const Empty = styled.div`
  height: 80px;
`;

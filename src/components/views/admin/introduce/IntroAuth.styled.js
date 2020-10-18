import styled from 'styled-components';
import {
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 1rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 0.6rem;
  border-bottom: 1px solid #cfcfcf;
  transition: background-color 0.3s;
  font-family: 'Nanum Gothic', sans-serif;
  &:hover {
    transition: background-color 0.3s;
    background-color: ${HEALTH_COLOR_LIGHT};
  }
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)}
  ${(props) => (props.current ? `color : white;` : null)}
`;

export const AcceptButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Nanum Gothic', sans-serif;
  color: #c23616;
  float: right;
  &:focus {
    outline: none;
  }
`;

export const ItemWrapper = styled.div`
  ${(props) => (props.current ? null : 'display : none;')}
`;

export const ItemDesc = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 1rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const STable = styled.table`
  margin: 0;
  margin: 12px;
  width: 90%;
  min-width: 500px;
  &:hover {
    ${(props) => (props.active ? 'cursor: pointer;' : null)}
  }
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 0.6rem;
  border-bottom: 1px solid #cfcfcf;
  transition: background-color 0.3s;
  &:hover {
    transition: background-color 0.3s;
    background-color: ${HEALTH_COLOR_LIGHT};
  }
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)}
  ${(props) => (props.current ? `color : white;` : null)}
`;

export const SThead = styled.thead`
  margin: 0;
  height: 42px;
`;

export const STbody = styled.tbody`
  margin: 0;
  height: 42px;
`;

export const STh = styled.th`
  margin: 0;
  border: 3px solid #ffffff;
  background-color: ${(props) =>
    props.title ? NEGATIVE_COLOR_LIGHT : '#efefef'};
  ${(props) =>
    props.current ? `background-color : ${HEALTH_COLOR_DARK};` : null}
  ${(props) => (props.current ? `color : white;` : null)}
  text-align: center;
  line-height: 42px;
  font-weight: 500;
  min-width: 100px;
`;

export const STr = styled.tr`
  margin: 0;
  height: 42px;
`;

export const STd = styled.td`
  margin: 0;
  border: 3px solid #ffffff;
  background-color: ${(props) =>
    props.title ? NEGATIVE_COLOR_LIGHT : '#efefef'};
  ${(props) =>
    props.current ? `background-color : ${HEALTH_COLOR_DARK};` : null}
  ${(props) => (props.current ? `color : white;` : null)}
    text-align: center;
  line-height: 42px;
  font-weight: 400;
  min-width: 150px;
`;

export const AcceptButton = styled.button`
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  color: #c23616;
  float: right;
  &:focus {
    outline: none;
  }
`;

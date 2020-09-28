import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Container = styled.div`
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

export const ListTitle = styled.h1`
  font-weight: 300;
  color: gray;
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 28px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 150px;
  padding-top: 8px;
  overflow-x: scroll;
  border-bottom: 1px solid #dfdfdf;
`;

export const STable = styled.table`
  margin: 0;
  width: 100%;
  min-width: 500px;
  overflow: scroll;
  &:hover {
    ${(props) => (props.active ? 'cursor: pointer;' : null)}
  }
`;

export const STh = styled.th`
  margin: 0;
  height: 42px;
`;

export const STr = styled.tbody`
  margin: 0;
  height: 42px;
`;

export const Std = styled.td`
  margin: 0;
  border: 3px solid #ffffff;
  background-color: ${(props) =>
    props.title ? NEGATIVE_COLOR_LIGHT : '#efefef'};
  ${(props) =>
    props.current ? `background-color : ${HEALTH_COLOR_DARK};` : null}
  ${(props) => (props.current ? `color : white;` : null)}
  text-align: center;
  line-height: 42px;
  font-weight: 200;
  min-width: 100px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 42px;
`;

export const SButton = styled.button`
  float: right;
  width: 100px;
  height: 42px;
  padding: 12px;
  font-size: 18px;
  font-weight: 200;
  background-color: ${(props) =>
    props.bgColor ? NEGATIVE_COLOR : HEALTH_COLOR};
  color: white;
  margin-left: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.bgColor ? NEGATIVE_COLOR_LIGHT : HEALTH_COLOR_LIGHT};
  }
`;

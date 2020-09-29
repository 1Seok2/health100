import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const Title = styled.h1`
  font-weight: 200;
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const EnrollDay = styled.div`
  display: inline-block;
  float: right;
  padding-right: 1rem;
  font-weight: 200;
  font-size: 14px;
  ${(props) => (props.current ? `color : white;` : null)}
  @media (max-width: 450px) {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

export const STable = styled.table`
  margin: 0;
  margin: 12px;
  width: 90%;
  min-width: 500px;
  overflow: scroll;
  &:hover {
    ${(props) => (props.active ? 'cursor: pointer;' : null)}
  }
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  height: 28px;
  line-height: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 0.6rem;
  border-bottom: 1px solid #cfcfcf;
  transition: background-color 0.3s;
  border-radius: 5px;
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
  font-weight: 200;
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
  font-weight: 200;
  min-width: 100px;
`;

export const FromWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 190px;
  background-color: white;
  box-shadow: 0px -6px 12px -8px rgba(100, 100, 100, 0.5);
`;

export const SForm = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
`;

export const TextArea = styled.textarea`
  margin-top: 1.1rem;
  width: 90%;
  height: 80px;
  padding: 10px;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${NEGATIVE_COLOR_LIGHT};
  }
`;

export const Submit = styled.button`
  width: 120px;
  height: 36px;
  font-size: 18px;
  font-weight: 200;
  border-radius: 6px;
  color: white;
  background-color: ${HEALTH_COLOR};
  float: right;
  margin-right: 1.5rem;
  margin-top: 1rem;
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
  }
`;

export const Decline = styled.a`
  width: 120px;
  height: 36px;
  font-size: 18px;
  line-height: 36px;
  border-radius: 6px;
  font-weight: 200;
  color: white;
  background-color: ${NEGATIVE_COLOR};
  float: right;
  margin-right: 1rem;
  margin-top: 1rem;
  &:hover {
    background-color: ${NEGATIVE_COLOR_LIGHT};
  }
`;

export const Empty = styled.div`
  height: 200px;
`;

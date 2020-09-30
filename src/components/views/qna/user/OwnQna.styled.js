import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

export const ButtonWrapper = styled.div`
  margin-bottom: 12px;
`;

export const TypeButton = styled.button`
  color: #aaa;
  font-weight: 200;
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
  }
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)};
  ${(props) => (props.current ? `color : white;` : null)};
  margin-right: 8px;
`;

export const Title = styled.h1`
  font-weight: 200;
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  transition: background-color 0.3s;
  border-radius: 5px;
  &:hover {
    transition: background-color 0.3s;
    background-color: ${HEALTH_COLOR_LIGHT};
    cursor: pointer;
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
  min-width: 320px;
  overflow: scroll;
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  height: 24px;
  line-height: 24px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 0.6rem;
  border-radius: 5px;
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)}
  ${(props) => (props.current ? `color : white;` : null)}
  ${(props) => (props.yet ? 'border-bottom : 1px solid #cfcfcf;' : null)}
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

export const Answer = styled.div`
  margin: 0;
  font-size: 1rem;
  font-weight: 200;
  line-height: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 1rem;
  border-bottom: 1px solid #cfcfcf;
`;

export const Empty = styled.div`
  height: 120px;
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  font-weight: 200;
  color: white;
  float: right;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${NEGATIVE_COLOR};
`;

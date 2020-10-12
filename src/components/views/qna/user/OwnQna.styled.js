import styled from 'styled-components';
import {
  SmallTabletWidth,
  SmartPhoneWidth,
} from 'components/modules/style/Width';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR_DARK,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';
const Arrow = require('../../../../assets/img/arrow_bottom.png');

export const ButtonWrapper = styled.div`
  margin-bottom: 12px;
`;

export const TypeButton = styled.button`
  color: #aaa;
  font-weight: 400;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
    transition: background-color 0.3s;
  }
  &:focus {
    outline: none;
  }
  ${(props) => (props.current ? `background-color : ${HEALTH_COLOR};` : null)};
  ${(props) => (props.current ? `color : white;` : null)};
  margin-right: 8px;
  margin-top: 8px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 1rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Container = styled.div`
  transition: background-color 0.3s;
  border-radius: 5px;
  ${(props) =>
    props.current
      ? null
      : `
  &:hover {
    transition: background-color 0.3s;
    background-color: ${HEALTH_COLOR_LIGHT};
    cursor: pointer;
  }`}
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-x: auto;
`;

export const STable = styled.table`
  min-width: 320px;
  height: auto;
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  height: 24px;
  line-height: 24px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 0.6rem;
  border-radius: 5px;
  font-family: 'Nanum Gothic', sans-serif;
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
  background-color: ${NEGATIVE_COLOR_LIGHT};
  line-height: 42px;
  font-weight: 600;
  min-width: 100px;
  font-family: 'Nanum Gothic', sans-serif;
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
  min-width: 100px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Answer = styled.div`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: 32px;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 1rem;
  border-bottom: 1px solid #cfcfcf;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Empty = styled.div`
  height: 120px;
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: white;
  float: right;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${NEGATIVE_COLOR};
  font-family: 'Nanum Gothic', sans-serif;
  &:focus {
    outline: none;
  }
`;

/* other people ... */

export const FormWrapper = styled.div`
  width: 100%;
`;

export const ListTitle = styled.h1`
  font-weight: 700;
  color: gray;
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 48px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const SForm = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;
  border-bottom: 1px solid #dfdfdf;
`;

export const SInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 24px;
  padding: 4px;
  padding-left: 12px;
  width: 78px;
  font-weight: 400;
  font-size: 12px;
  outline: none;
  border: 1px solid #bbb;
  margin-right: 0.6rem;
  margin-bottom: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  @media (max-width: ${SmallTabletWidth}) {
    display: block;
  }
`;

export const SetButton = styled.button`
  height: 32px;
  min-width: 72px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border-radius: 16px;
  background-color: ${NEGATIVE_COLOR_DARK};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${NEGATIVE_COLOR};
    transition: background-color 0.3s;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  @media (max-width: ${SmallTabletWidth}) {
    display: block;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  padding: 4px;
  outline: none;
  border: 1px solid ${HEALTH_COLOR};
  border-radius: 5px;
  height: 32px;
  width: 140px;
  min-width: 140px;
  padding-left: 12px;
  font-weight: 500;
  font-family: 'Nanum Gothic', sans-serif;
  background-image: url(${Arrow});
  background-size: 16px;
  background-position: 95% center;
  background-repeat: no-repeat;
  margin-right: 0.6rem;
  margin-bottom: 12px;
  &:focus {
    border: 1px solid ${NEGATIVE_COLOR_DARK};
  }
  @media (max-width: ${SmallTabletWidth}) {
    display: block;
  }
`;

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

const Arrow = require('../../../assets/img/arrow_bottom.png');

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
  overflow-y: scroll;
  position: relative;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const SForm = styled.form`
  display: flex;
  margin-bottom: 12px;
  border-bottom: 1px solid #dfdfdf;
  @media (max-width: ${SmallTabletWidth}) {
    flex-direction: column;
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

export const PlusButton = styled.button`
  height: 32px;
  min-width: 56px;
  font-size: 13px;
  font-family: 'Nanum Gothic', sans-serif;
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

export const ListTitle = styled.h1`
  font-weight: 700;
  color: gray;
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 48px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 170px;
  padding-top: 8px;
  overflow-x: auto;
  border-bottom: 1px solid #dfdfdf;
`;

export const STable = styled.table`
  margin: 0;
  width: 100%;
  &:hover {
    ${(props) => (props.active ? 'cursor: pointer;' : null)}
  }
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

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const SButton = styled.button`
  float: right;
  width: 100px;
  height: 42px;
  padding: 12px;
  font-size: 18px;
  font-weight: 400;
  background-color: ${(props) =>
    props.bgColor ? NEGATIVE_COLOR : HEALTH_COLOR};
  color: white;
  margin-left: 1.5rem;
  transition: background-color 0.3s;
  font-family: 'Nanum Gothic', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.bgColor ? NEGATIVE_COLOR_LIGHT : HEALTH_COLOR_LIGHT};
    transition: background-color 0.3s;
  }
  &:focus {
    outline: none;
  }
`;

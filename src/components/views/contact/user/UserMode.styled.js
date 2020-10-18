import styled from 'styled-components';
import {
  HEALTH_COLOR_DARK,
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';

// export const Container = styled.div`
//   border-bottom: 1px solid #bbb;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   margin-bottom: 12px;
//   border-radius: 5px;
//   transition: background-color 0.3s;
//   ${(props) =>
//     props.current
//       ? null
//       : `
//   &:hover {
//     background-color: ${HEALTH_COLOR_LIGHT};
//     transition: background-color 0.3s;
//   }`}
// `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #bbb;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
  ${(props) =>
    props.current
      ? null
      : `
  &:hover {
    background-color: ${HEALTH_COLOR_LIGHT};
    transition: background-color 0.3s;
  }`}
  @media (max-width: 880px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'Nanum Gothic', sans-serif;
`;

// export const VideoWrapper = styled.div`
//   width: 100%;
//   height: 300px;
//   display: ${(props) => (props.current ? 'block' : 'none')};
// `
export const VideoWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: ${(props) => (props.current ? 'block' : 'none')};
  padding: 24px;
  @media (max-width: 880px) {
    padding: 0;
    height: auto;
    margin: 12px 0;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  min-width: 240px;
  height: 100%;
`;

export const DescWrapper = styled.div`
  display: inline-block;
  width: 48%;
  margin: 1%;
`;

export const ItemDesc = styled.h4`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Empty = styled.div`
  height: 120px;
`;

/* table ... */

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: scroll;
`;

export const STable = styled.table`
  margin: 0;
  width: 90%;
  &:hover {
    ${(props) => (props.active ? 'cursor: pointer;' : null)}
  }
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

export const QuestTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  height: 28px;
  line-height: 32px;
  padding-bottom: 16px;
  transition: background-color 0.3s;
  border-radius: 5px;
  font-family: 'Nanum Gothic', sans-serif;
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
  font-size: 12px;
  font-weight: 500;
  min-width: 100px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 880px) {
    display: block;
  }
`;

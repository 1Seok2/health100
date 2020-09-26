import styled from 'styled-components';

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
  height: 110px;
  padding-top: 8px;
  overflow-x: scroll;
  border-bottom: 1px solid #dfdfdf;
`;

export const STable = styled.table`
  margin: 0;
  width: 100%;
  min-width: 500px;
  overflow: scroll;
`;

export const STr = styled.tr`
  margin: 0;
  height: 42px;
`;

export const Std = styled.td`
  margin: 0;
  border: 3px solid #ffffff;
  background-color: ${(props) =>
    props.title ? 'rgba(136, 83, 208,0.2)' : '#fafafa'};
  text-align: center;
  line-height: 42px;
  font-weight: 200;
  min-width: 100px;
`;

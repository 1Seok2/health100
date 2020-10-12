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
  overflow-y: scroll;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  font-family: 'Nanum Gothic', sans-serif;
  color: #999;
`;

export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  border-radius: 3px;
  margin: 4px;
  border: 1px solid #dfdfdf;
`;

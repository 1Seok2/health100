import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 4rem);
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  padding-top: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  height: calc(100vh - 5.5rem);
  overflow: scroll;
`;

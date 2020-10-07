import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  overflow-y: scroll;
  position: relative;
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.show ? '42%' : '100%')};
  display: ${(props) => (props.show ? 'inline-block' : 'block')};
  padding-top: 1.7rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 960px) {
    width: ${(props) => (props.show ? '30%' : '100%')};
  }
`;

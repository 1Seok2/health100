import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  /* width: ${(props) => (props.show ? '42%' : '100%')}; */
  height: 100%;
  width: 42%;
  display: ${(props) => (props.show ? 'inline-block' : 'block')};
  padding-top: 1.7rem;
  margin-bottom: 1rem;
  text-align: center;
  overflow-y: auto;
  @media (max-width: 960px) {
    /* width: ${(props) => (props.show ? '30%' : '100%')}; */
    width: 30%;
  }
  @media (max-width: 800px) {
    width: ${(props) => (props.show ? '0%' : '100%')};
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  padding-left: 24px;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: left;
`;

export const ModeButton = styled.a`
  margin-left: 12px;
  font-size: 14px;
  color: #092c6f;
  font-family: 'Nanum Gothic', sans-serif;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  border: 1px solid gray;
  position: relative;
`;

export const IntroItem = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  width: 40%;
  height: 300px;
  border: 1px solid gray;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

export const Desc = styled.div`
  width: 58%;
  height: 300px;
  display: inline-block;
  border: 1px solid gray;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const LoginButton = styled(Link)`
  position: absolute;
  width: 60%;
  max-width: 280px;
  box-shadow: 0px 8px 10px -6px rgb(100, 100, 100);
  background-color: #2d98da;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  border-radius: 24px;
  text-align: center;
  line-height: 48px;
  color: white;
  font-size: 22px;
  font-weight: 300;
`;

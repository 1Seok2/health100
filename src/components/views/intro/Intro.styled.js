import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import introImg from '../../../assets/img/intro_background.jpg';

const ScrollFade = keyframes`
0% {
  opacity: 1;
}
33% {
  opacity : 0.9;
}
66% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const IntroTitle = styled.h1`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  align-self: flex-start;
  padding-top: 2.4rem;
  padding-left: 8%;
  padding-bottom: 8rem;
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  color: #666666;
`;

export const IntroImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${introImg});
  background-position: center;
  background-attachment: fixed;
`;
export const IntroDesc = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 18px;
  color: white;
  animation: ${ScrollFade} 2s infinite;
`;
export const Scroll = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 28px;
  color: white;
  animation: ${ScrollFade} 2s infinite;
`;

export const IntroItem = styled.div`
  width: 80vw;
  margin-left: 10vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: fixed;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  width: 40%;
  height: 80%;
  border: 1px solid gray;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

export const Desc = styled.div`
  width: 60%;
  height: 80%;
  display: inline-block;
  border: 1px solid gray;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 160px;
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
  transition: background-color 0.3s;
  &:hover {
    background-color: #3fbbed;
    transition: background-color 0.3s;
  }
`;

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from 'assets/img/logo.png';
import { SmartPhoneWidth } from 'components/modules/style/Width';

const ShowMenu = keyframes`
0%{
    width : 5.6rem;
}
100%{
    width : 15rem;
}
`;

const HideMenu = keyframes`
0%{
    width : 15rem;
}
100%{
    width : 5.6rem;
}
`;

export const Container = styled.div`
  ${(props) => (props.extend ? 'width : 15rem;' : 'width : 5.6rem;')}
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  background-color: #092c6f;
  border-top-right-radius: 1.7rem;
  border-bottom-right-radius: 1.7rem;
  z-index: 1;
  box-shadow: 6px 0px 9px -3px rgba(100, 100, 100, 1);
  /* ${(props) => (props.extend ? 'width : 12rem;' : null)} */
  animation: ${(props) => (props.extend ? ShowMenu : HideMenu)} 0.5s;
  @media (max-width: ${SmartPhoneWidth}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoImg = styled.div`
  width: ${(props) => (props.extend ? '80%' : '3.8rem')};
  height: 3.8rem;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: ${(props) => (props.extend ? 'left' : 'center')};
  background-size: contain;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  filter: invert(100%);
  position: absolute;
  top: 2.2rem;
  text-align: right;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const LogOut = styled.button`
  filter: invert(100%);
  color: white;
  font-size: 16px;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0;
  padding-left: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const ItemWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled(Link)`
  width: 4.3rem;
  margin-bottom: 12px;
  height: 4rem;
  padding-top: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.6rem;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:last-child {
    margin-bottom: 100%;
  }
  ${(props) =>
    props.extend &&
    `
    padding-left : .6rem;
  width : 90%;
  flex-direction : row;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 50%;
  }

  `}
  ${(props) => (props.current ? 'background-color: #efefef;' : null)}
  &:hover {
    background-color: rgb(105, 154, 227);
    transition: background-color 0.3s;
  }
`;

export const ItemDesc = styled.h2`
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  ${(props) => (props.current ? 'color: #092c6f;' : null)}
  ${(props) =>
    props.extend
      ? `
font-size : 1rem;
font-weight : 600;
margin-right : 16px;
`
      : `
  font-weight: 600;
  font-size: 0.6rem;
  margin-top: 8px;
`};
`;

export const Extends = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  color: white;
  font-weight: 400;
  font-size: 2.5rem;
  outline: none;
  font-family: 'Nanum Gothic', sans-serif;
  ${(props) =>
    props.extend &&
    `
  width : 80%;
  text-align : right;
  `}

  &:focus {
    outline: none;
  }
`;

import styled from 'styled-components';
import {
  HEALTH_COLOR,
  HEALTH_COLOR_LIGHT,
  NEGATIVE_COLOR,
  NEGATIVE_COLOR_LIGHT,
} from 'components/modules/style/Color';
const GoogleLogo = require('assets/img/google.png');

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const FormWrapper = styled.div`
  text-align: center;
  position: absolute;
  width: 30%;
  height: 60%;
  min-height: 300px;
  max-width: 320px;
  min-width: 260px;
  margin: 0 auto;
  padding: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 100%;
  height: 80%;
  position: relative;
`;

export const Title = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 22px;
  margin-bottom: 3rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const CheckWrapper = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Nanum Gothic', sans-serif;
  line-height: 14px;
  text-align: right;
  margin-bottom: 1.2rem;
`;

export const Notice = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #c23616;
  margin-top: 4px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const SLabel = styled.label``;

export const TextInput = styled.input`
  display: block;
  width: calc(100% - 22px);
  padding: 10px;
  border: none;
  border: 1px solid #ddd;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-bottom: 16px;
  font-size: 12px;
  color: black;
  box-sizing: content-box;
  font-family: 'Nanum Gothic', sans-serif;
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.input`
  float: right;
  border: none;
  background-color: ${(props) =>
    props.newAccount ? NEGATIVE_COLOR : HEALTH_COLOR};
  width: 34%;
  height: 36px;
  border-radius: 24px;
  margin-right: 0.2rem;
  margin-top: 0.6rem;
  box-shadow: 0px 4px 8px -5px rgb(100, 100, 100);
  color: white;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.3s;
  font-family: 'Nanum Gothic', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.newAccount ? NEGATIVE_COLOR_LIGHT : HEALTH_COLOR_LIGHT};
    transition: all 0.3s;
    box-shadow: 0px 6px 10px -5px rgb(100, 100, 100);
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: #c0392b;
  font-weight: 600;
  text-align: left;
  line-height: 16px;
  font-size: 12px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const AuthSwitch = styled.div`
  float: left;
  width: 50%;
  height: 36px;
  border-radius: 18px;
  line-height: 36px;
  margin-left: 0.2rem;
  margin-top: 0.6rem;
  color: #666;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Nanum Gothic', sans-serif;
  &:hover {
    cursor: pointer;
    color: #999;
    transition: color 0.3s;
  }
`;

export const AuthButton = styled.button`
  width: 190px;
  height: 36px;
  text-align: center;
  border-radius: 18px;
  border: 1px solid #ddd;
  padding: 8px;
  padding-right: 24px;
  box-shadow: none;
  transition: box-shadow 0.3s;
  &:hover {
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 6px -6px rgb(100, 100, 100);
    transition: all 0.3s;
  }
  &:focus {
    outline: none;
  }
  text-align: right;
  font-weight: 400;
  font-size: 12px;
  font-family: 'Nanum Gothic', sans-serif;
  background-image: url(${GoogleLogo});
  background-size: 20px;
  background-position: 16px center;
  background-repeat: no-repeat;
`;

export const LoginImg = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
  position: absolute;
  left: 16px;
  top: 5px;
`;

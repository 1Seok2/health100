import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Form = styled.form`
  text-align: center;
  position: absolute;
  width: 30%;
  height: 300px;
  min-width: 260px;
  margin: 0 auto;
  padding: 18px;
  padding-top: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  font-weight: 100;
  text-align: center;
  font-size: 24px;
  margin-bottom: 4rem;
`;

export const TextInput = styled.input`
  display: block;
  min-width: 240px;
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
`;

export const Submit = styled.input`
  float: right;
  border: none;
  background-color: #2d98da;
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
  &:hover {
    cursor: pointer;
    background-color: #3fbbed;
    transition: all 0.3s;
    box-shadow: 0px 6px 10px -5px rgb(100, 100, 100);
  }
`;

export const ErrorMessage = styled.div`
  color: #c0392b;
  font-weight: 200;
  text-align: left;
  line-height: 16px;
  font-size: 12px;
`;

export const AuthSwitch = styled.div`
  float: left;
  width: 40%;
  height: 36px;
  border-radius: 18px;
  line-height: 36px;
  margin-left: 0.2rem;
  margin-top: 0.6rem;
  color: #666;
  font-size: 10px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    color: #999;
    transition: color 0.3s;
  }
`;

export const AuthButton = styled.button`
  position: absolute;
  width: 190px;
  height: 36px;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 18px;
  border: 1px solid #ddd;
  padding-right: 24px;
  box-shadow: none;
  transition: box-shadow 0.3s;
  &:hover {
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 6px -6px rgb(100, 100, 100);
    transition: all 0.3s;
  }
`;

export const LoginImg = styled.img`
  width: 24px;
  height: 24px;
  float: left;
  margin-bottom: 6px;
  position: absolute;
  left: 16px;
  top: 5px;
`;

export const AuthDesc = styled.span`
  float: right;
  font-weight: 200;
  font-size: 12px;
`;

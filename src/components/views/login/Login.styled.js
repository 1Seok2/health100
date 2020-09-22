import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  position: absolute;
  width: 30%;
  height: 240px;
  min-width: 300px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextInput = styled.input`
  display: block;
  max-width: 320px;
  width: calc(100% - 22px);
  padding: 10px;
  border: none;
  border-bottom: 1px solid #888;
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
  width: 40%;
  height: 36px;
  border-radius: 24px;
  margin-right: 0.2rem;
  margin-top: 0.6rem;
  box-shadow: 0px 4px 8px -5px rgb(100, 100, 100);
  color: white;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    background-color: #3fbbed;
    transition: background-color 0.3s;
  }
`;

export const ErrorMessage = styled.div`
  color: #c0392b;
  font-weight: 200;
  margin: 1rem;
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
  display: block;
  width: 70%;
  margin-left: 15%;
  height: 36px;
  text-align: center;
  border-radius: 18px;
  margin-top: 6rem;
  box-shadow: 0px 2px 12px -8px rgb(100, 100, 100);
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
    box-shadow: 0px 4px 12px -6px rgb(100, 100, 100);
    transition: all 0.3s;
  }
`;

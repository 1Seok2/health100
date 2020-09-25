/**
 * @author : wonseog
 * @todo : facebook OAuth
 */

import React, { useState } from 'react';
import { FirebaseAuth, FirebaseInstance, FirebaseStore } from 'config/fbConfig';
import {
  Container,
  TextInput,
  Form,
  Title,
  Submit,
  ErrorMessage,
  AuthSwitch,
  AuthButton,
  LoginImg,
  AuthDesc,
} from './Login.styled';

const GoogleLogo = require('assets/img/google.png');

var actionCodeSettings = {
  url: 'http://localhost:3000',
  // This must be true.
  handleCodeInApp: true,
};

const Login = ({ setSigned }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'phoneNumber') {
      setPhoneNum(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        /* sign up ... */
        data = await FirebaseAuth.createUserWithEmailAndPassword(
          email,
          password,
          // type trainer or normal
        );
      } else {
        /* sign in ... */
        data = await FirebaseAuth.signInWithEmailAndPassword(email, password);
      }
      console.log('login data is ... ', data);
    } catch (error) {
      console.log(error.message);
      switch (error.message) {
        case 'The email address is already in use by another account.':
          setError('* 이미 가입된 이메일입니다.');
          break;
        case 'Password should be at least 6 characters':
          setError('* 비밀번호는 최소 6자 입니다.');
          break;
        case 'There is no user record corresponding to this identifier. The user may have been deleted.':
          setError('* 일치하는 계정이 존재하지 않습니다.');
          break;
        case 'The password is invalid or the user does not have a password.':
          setError(
            '* 비밀번호가 일치하지 않거나 비밀번호가 존재하지 않는 계정입니다.',
          );
          break;
        case 'Too many unsuccessful login attempts. Please try again later.':
          setError(
            '* 부적절한 로그인이 지속되어, 잠시 후에 다시 시도해 주시기 바랍니다.',
          );
          break;
        default:
          setError(error.message);
      }
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const SNSLogin = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === 'google') {
      provider = new FirebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'facebook') {
      provider = new FirebaseInstance.auth.FacebookAuthProvider();
    }
    const data = await FirebaseAuth.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={onSubmit} className="container">
        <Title>국민체력 100</Title>
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          className="authInput"
          onChange={onChange}
        />
        {error && <ErrorMessage className="authError">{error}</ErrorMessage>}
        <AuthSwitch onClick={toggleAccount} className="authSwitch">
          {newAccount ? '계정이 이미 있으신가요?' : '계정이 없으신가요?'}
        </AuthSwitch>
        <Submit
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? '회원가입' : '로그인'}
        />
      </Form>
      <AuthButton name="google" onClick={SNSLogin}>
        <LoginImg src={GoogleLogo} alt="googleLogin" />
        <AuthDesc>구글 계정으로 로그인</AuthDesc>
      </AuthButton>
      {/* <AuthButton name="facebook" onClick={SNSLogin}>
        start with facebook ...
      </AuthButton> */}
    </Container>
  );
};

export default Login;

/**
 * @author : wonseog
 * @todo : facebook OAuth
 */

import React, { useState } from 'react';
import {
  FirebaseAuth,
  FirebaseInstance,
  FirebaseStore,
} from '../../../config/fbConfig';
import {
  Container,
  TextInput,
  FormWrapper,
  Form,
  Title,
  CheckWrapper,
  SLabel,
  Notice,
  Submit,
  ErrorMessage,
  AuthSwitch,
  AuthButton,
} from './Login.styled';

const Login = ({ setSigned }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  const [isTrainer, setIsTrainer] = useState(false);
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
    let data;
    try {
      if (newAccount) {
        /* sign up ... */
        data = await FirebaseAuth.createUserWithEmailAndPassword(
          email,
          password,
        );
      } else {
        /* sign in ... */
        data = await FirebaseAuth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
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
    } finally {
      const { uid } = FirebaseAuth.currentUser;
      if (newAccount && data) {
        await FirebaseStore.collection('users').add({
          userId: uid,
          createdAt: Date.now(),
          isTrainer: isTrainer,
        });
      }
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const SNSLogin = async (e) => {
    const provider = new FirebaseInstance.auth.GoogleAuthProvider();
    console.log('p', provider);
    const data = await FirebaseAuth.signInWithPopup(provider);
    console.log('login data : ', data);
  };
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={onSubmit} className="container">
          <Title>국민체력 100</Title>
          <CheckWrapper>
            <SLabel>
              트레이너이신가요? &nbsp;
              <input
                type="checkbox"
                name="isTrainer"
                onClick={() => setIsTrainer(!isTrainer)}
              />
            </SLabel>
            <Notice>
              {isTrainer && '\n트레이너에게는 구글 로그인을 제공하지 않습니다'}
            </Notice>
          </CheckWrapper>
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
        {/* Only normal user can login with google */}
        {!isTrainer && (
          <AuthButton name="google" onClick={(e) => SNSLogin(e)}>
            {/* <LoginImg src={GoogleLogo} alt="googleLogin" /> */}
            구글 계정으로 로그인
          </AuthButton>
        )}
      </FormWrapper>
    </Container>
  );
};

export default Login;
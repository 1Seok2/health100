/**
 * @description 로그인 페이지 프레젠터
 */

import React from 'react';
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

const LoginPresenter = ({
  onSubmit,
  newAccount,
  setIsTrainer,
  isTrainer,
  name,
  onChange,
  phone,
  email,
  password,
  tall,
  weight,
  age,
  error,
  toggleAccount,
  SNSLogin,
}) => (
  <Container>
    <FormWrapper>
      <Form onSubmit={onSubmit} className="container">
        <Title>비대면 국민체력 100</Title>
        <CheckWrapper>
          {newAccount && (
            <SLabel>
              트레이너이신가요? &nbsp;
              <input
                type="checkbox"
                name="isTrainer"
                onClick={() => setIsTrainer(!isTrainer)}
              />
            </SLabel>
          )}
          <Notice>
            {isTrainer && '\n트레이너에게는 구글 로그인을 제공하지 않습니다'}
          </Notice>
        </CheckWrapper>
        {isTrainer && (
          <>
            <TextInput
              name="name"
              type="name"
              placeholder="Name"
              required
              value={name}
              onChange={onChange}
              className="authInput"
            />
            <TextInput
              name="phone"
              type="phone"
              placeholder="Phone"
              required
              value={phone}
              onChange={onChange}
              className="authInput"
            />
          </>
        )}
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
        {!isTrainer && newAccount && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextInput
              name="tall"
              type="tall"
              placeholder="키 (cm)"
              required
              value={tall}
              onChange={onChange}
              className="authInput"
              style={{ marginRight: 12 }}
            />
            <TextInput
              name="weight"
              type="weight"
              placeholder="몸무게 (kg)"
              required
              value={weight}
              className="authInput"
              onChange={onChange}
            />
            <TextInput
              name="age"
              type="age"
              placeholder="나이"
              required
              value={age}
              className="authInput"
              onChange={onChange}
              style={{ marginLeft: 12 }}
            />
          </div>
        )}
        {error && <ErrorMessage className="authError">{error}</ErrorMessage>}
        <AuthSwitch onClick={toggleAccount} className="authSwitch">
          {newAccount ? '계정이 이미 있으신가요?' : '회원가입'}
        </AuthSwitch>
        <Submit
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? '회원가입' : '로그인'}
          newAccount={newAccount}
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

export default LoginPresenter;

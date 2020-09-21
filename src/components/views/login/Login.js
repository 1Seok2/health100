/**
 * @author : wonseog
 * @todo : facebook OAuth
 */

import React, { useState } from 'react';
import { FirebaseAuth, FirebaseInstance } from 'config/fbConfig';

const inputStyles = {};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await FirebaseAuth.createUserWithEmailAndPassword(
          email,
          password,
        );
      } else {
        data = await FirebaseAuth.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
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
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          className="authInput"
          onChange={onChange}
        />
        <input
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? 'Create Account' : 'Sign In'}
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
      <button name="google" onClick={SNSLogin}>
        start with google ...
      </button>
      <button name="facebook" onClick={SNSLogin}>
        start with facebook ...
      </button>
    </>
  );
};

export default Login;

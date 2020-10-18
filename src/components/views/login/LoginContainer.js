/**
 * @author : wonseog
 * @todo : facebook OAuth
 * @description 로그인 페이지
 */

import React, { useState } from 'react';
import { FirebaseAuth, FirebaseInstance, FirebaseStore } from 'config/fbConfig';
import LoginPresenter from './LoginPresenter';
import LoginError from './LoginError';

// import { Redirect } from 'react-router-dom';

const LoginContainer = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  /* common info */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* trainer info */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  /* user info */
  const [tall, setTall] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

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
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'tall') {
      setTall(value);
    } else if (name === 'weight') {
      setWeight(value);
    } else if (name === 'age') {
      setAge(value);
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
      setError(LoginError(error.message));
    } finally {
      if (FirebaseAuth.currentUser) {
        const { uid } = FirebaseAuth.currentUser;
        if (newAccount && data) {
          const dateId = Date.now();
          await FirebaseStore.collection('users').doc(`${dateId}`).set({
            userId: uid,
            userEmail: email,
            createdAt: dateId,
            isTrainer: isTrainer,
            age: age,
            weight: weight,
            tall: tall,
            // below are trainer info ...
            tName: name,
            tPhone: phone,
            isAvailable: 0,
          });
          if (isTrainer) alert('검토 후 처방 가능합니다');
          // setLoggedIn(true);
        } else if (data) {
          // setLoggedIn(true);
        }
      }
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const googleLogin = async () => {
    const provider = new FirebaseInstance.auth.GoogleAuthProvider();
    const data = await FirebaseAuth.signInWithPopup(provider);
    return data;
  };
  const SNSLogin = async (e) => {
    googleLogin().then(async (data) => {
      const user = FirebaseAuth.currentUser;
      if (data.additionalUserInfo.isNewUser) {
        const dateId = Date.now();
        await FirebaseStore.collection('users').doc(`${dateId}`).set({
          userId: user.uid,
          userEmail: data.additionalUserInfo.profile.email,
          createdAt: dateId,
          isTrainer: 0,
          // below are trainer info ...
          tName: data.additionalUserInfo.profile.name,
          tPhone: phone,
          isAvailable: 0,
        });
      }
    });
  };

  return (
    <LoginPresenter
      onSubmit={onSubmit}
      newAccount={newAccount}
      setIsTrainer={setIsTrainer}
      isTrainer={isTrainer}
      name={name}
      onChange={onChange}
      phone={phone}
      email={email}
      password={password}
      tall={tall}
      weight={weight}
      age={age}
      error={error}
      toggleAccount={toggleAccount}
      SNSLogin={SNSLogin}
    />
  );
};

export default LoginContainer;

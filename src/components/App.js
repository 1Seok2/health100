import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from 'assets/style/Global.Styled';
import { OuterContainer } from './App.styled';
import { FirebaseAuth } from 'config/fbConfig';
import AiScript from 'assets/script/AiScript';
import Loading from './modules/loading';

import 'assets/style/css/Scroll.css';

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isSigned, setSigned] = useState(false);

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  useEffect(() => {
    AiScript();
  });
  const refreshUser = () => {
    const user = FirebaseAuth.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <>
          <AppRouter
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
            userObj={userObj}
          />
          <GlobalStyle />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;

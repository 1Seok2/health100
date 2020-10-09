import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { OuterContainer } from './App.styled';

/* common sections ... */
import Header from './sections/header';
import Sidebar from './sections/sidebar';

/* admin page ... */
import Admin from 'components/views/admin';

/* need login ... */
import Intro from 'components/views/intro';
import Login from 'components/views/login';

/* already login ... */
import Health from 'components/views/health';
import Type from './views/health/type';
import MyPage from 'components/views/mypage';
import Graph from './views/mypage/graph/Graph';
import Qna from 'components/views/qna';
import ContactTrainer from 'components/views/contact';

const AppRouter = ({
  refreshUser,
  isLoggedIn,
  // isSigned,
  userObj,
  // setSigned,
}) => {
  const [UserObj, setUserObj] = useState({});

  const setType = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let trainer;
      let isAvailable = 0;
      let email, createdAt, originSrc, desc, introAvailable, tName;
      snap.docs.map((doc) => {
        if (userObj.uid === doc.data().userId) {
          trainer = doc.data().isTrainer;
          isAvailable = doc.data().isAvailable;
          email = doc.data().userEmail;
          createdAt = doc.data().createdAt;
          originSrc = doc.data().originSrc;
          desc = doc.data().desc;
          introAvailable = doc.data().introAvailable;
          tName = doc.data().tName;
        }
      });
      setUserObj({
        ...userObj,
        /**
         * false : user
         * true : trainer
         * 2 : admin
         */
        type: trainer === undefined ? 0 : trainer,
        /* trainer can consultant ? */
        isAvailable: isAvailable === undefined ? 0 : isAvailable,
        email: email,
        createdAt: createdAt,
        originSrc: originSrc,
        desc: desc,
        introAvailable: introAvailable,
        tName: tName,
      });
    });
  };

  useEffect(() => {
    if (userObj !== null) setType();
  }, [userObj]);
  return (
    <Router>
      {isLoggedIn && <Header userObj={UserObj} />}
      {isLoggedIn && <Sidebar userObj={UserObj} />}
      {/* {isSigned && <Header userObj={userObj} setSigned={setSigned} />} */}
      <Switch>
        {isLoggedIn ? (
          // {/* {isSigned ? ( */}
          <>
            {UserObj.type === 2 ? (
              <OuterContainer admin={true}>
                <Route
                  exact
                  path="/admin"
                  render={() => <Admin userObj={UserObj} />}
                />
                <Redirect path="*" to="/admin" />
              </OuterContainer>
            ) : (
              <OuterContainer>
                {/* if user already logged in ... */}
                {/* main is self health */}
                {/* <Route
                  exact
                  path="/health/type"
                  render={() => <Type userObj={UserObj} />}
                /> */}
                <Route
                  exact
                  path="/health"
                  render={() => <Health userObj={UserObj} />}
                />
                {/* <Route
                  exact
                  path="/health/senior"
                  render={() => <Health userObj={UserObj} />}
                /> */}
                {/* can see my data */}
                <Route
                  exact
                  path="/mypage"
                  render={() => (
                    <MyPage userObj={UserObj} refreshUser={refreshUser} />
                  )}
                />

                <Route
                  exact
                  path="/mypage/graph"
                  render={() => (
                    <Graph userObj={UserObj} refreshUser={refreshUser} />
                  )}
                />
                {/* can consultant about my data */}
                <Route
                  exact
                  path="/qna"
                  render={() => <Qna userObj={UserObj} />}
                />
                {/* can contact with trainer */}
                <Route
                  exact
                  path="/contact"
                  render={() => <ContactTrainer userObj={UserObj} />}
                />
                <Redirect path="*" to="/health" />
              </OuterContainer>
            )}
          </>
        ) : (
          <>
            {/* if user is not logged in ... */}
            <Route exact path="/" component={Intro} />
            <Route exact path="/login" render={() => <Login />} />
            <Redirect path="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

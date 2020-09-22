import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { OuterContainer } from './App.styled';

/* common sections ... */
import Header from './sections/header';

/* need login ... */
import Intro from 'components/views/intro';
import Login from 'components/views/login';

/* already login ... */
import Health from 'components/views/health';
import MyPage from 'components/views/mypage';
import Qna from 'components/views/qna';
import Trainer from 'components/views/trainer';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Header userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <OuterContainer>
              {/* if user already logged in ... */}
              <Route
                exact
                path="/"
                render={() => <Health userObj={userObj} />}
              />
              <Route
                exact
                path="/mypage"
                render={() => (
                  <MyPage userObj={userObj} refreshUser={refreshUser} />
                )}
              />
              <Route
                exact
                path="/qna"
                render={() => <Qna userObj={userObj} />}
              />
              <Route
                exact
                path="/trainer"
                render={() => <Trainer userObj={userObj} />}
              />
              <Redirect path="*" to="/" />
            </OuterContainer>
          </>
        ) : (
          <>
            {/* if user is not logged in ... */}
            <Route exact path="/" component={Intro} />
            <Route exact path="/login" component={Login} />
            <Redirect path="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

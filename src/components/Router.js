import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

/* route components ... */
import Intro from 'components/views/intro';
import Health from 'components/views/health';
import Login from 'components/views/login';
import MyPage from 'components/views/mypage';
import Qna from 'components/views/qna';
import Header from './sections/header';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Header userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            {/* if user already logged in ... */}
            <Route exact path="/" render={() => <Health userObj={userObj} />} />
            <Route
              exact
              path="/mypage"
              render={() => (
                <MyPage userObj={userObj} refreshUser={refreshUser} />
              )}
            />
            <Route exact path="/qna" render={() => <Qna userObj={userObj} />} />
            <Redirect path="*" to="/" />
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

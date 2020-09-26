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

const AppRouter = ({
  refreshUser,
  isLoggedIn,
  // isSigned,
  userObj,
  // setSigned,
}) => {
  return (
    <Router>
      {isLoggedIn && <Header userObj={userObj} />}
      {/* {isSigned && <Header userObj={userObj} setSigned={setSigned} />} */}
      <Switch>
        {isLoggedIn ? (
          // {/* {isSigned ? ( */}
          <>
            <OuterContainer>
              {/* if user already logged in ... */}
              {/* main is self health */}
              <Route
                exact
                path="/health"
                render={() => <Health userObj={userObj} />}
              />
              {/* can see my data */}
              <Route
                exact
                path="/mypage"
                render={() => (
                  <MyPage userObj={userObj} refreshUser={refreshUser} />
                )}
              />
              {/* can consultant about my data */}
              <Route
                exact
                path="/qna"
                render={() => <Qna userObj={userObj} />}
              />
              {/* can contact with trainer */}
              <Route
                exact
                path="/trainer"
                render={() => <Trainer userObj={userObj} />}
              />
              <Redirect path="*" to="/health" />
            </OuterContainer>
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

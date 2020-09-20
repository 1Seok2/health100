import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from 'components/views/intro';
import Health from 'components/views/health';
import Login from 'components/views/login';
import SignUp from 'components/views/singup';
import MyPage from 'components/views/mypage';
import Qna from 'components/views/qna';
import Header from './sections/header';

const AppRouter = () => {
  // const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/qna" component={Qna} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

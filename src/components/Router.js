import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Health from 'components/views/health';
import Login from 'components/views/login';
import SignUp from 'components/views/singup';
import MyPage from 'components/views/mypage';

const AppRouter = () => {
  // const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Health} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

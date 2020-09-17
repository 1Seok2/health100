import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'components/views/login';
import Health from 'components/views/health';

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <Route exact path="/" component={Health} />
        ) : (
          <Route exact path="/login" component={Login} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

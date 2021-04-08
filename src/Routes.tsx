import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/core/Home';
import Shop from './components/core/Shop';
import SignIn from './components/core/SignIn';
import SignUp from './components/core/SignUp';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={ Home } exact></Route>
        <Route path='/shop' component={ Shop } ></Route>
        <Route path='/signin' component={ SignIn } ></Route>
        <Route path='/signup' component={ SignUp } ></Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;

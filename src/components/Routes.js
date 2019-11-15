import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ToDo from './todo/index';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ToDo} />
  </Switch>
);

export default Routes;


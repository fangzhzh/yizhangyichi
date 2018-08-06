import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BusyPage from '../busy/busypage';
import EasyPage from '../easy/easypage';
import Login from '../login';
import About from '../about';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/zhang" component={BusyPage} />
      <Route path="/chi" component={EasyPage} />
      <Route path="/about-me" component={About} />
      <Route path="/" component={Login} />
    </Switch>
  </div>
);
export default App;

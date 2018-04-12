import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BusyPage from '../busy/busypage';
import EasyPage from '../easy/easypage';
import HomePage from '../home';
import About from '../about';

const App = () => (
  <Router>
    <div>
      <header>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/zhang">
          张
        </Link>
        <Link className="link" to="/chi">
          弛
        </Link>
        <Link className="link" to="/about-me">
          About
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={EasyPage} />
          <Route path="/zhang" component={BusyPage} />
          <Route path="/chi" component={EasyPage} />
          <Route path="/about-me" component={About} />
          <Route path="/" component={EasyPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom'
import BusyPage from '../busy/busypage'
import EasyPage from '../easy/easypage'
import HomePage from '../home'
import About from '../about'
const App = () => (
  <div>
    <header>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/zhang">张</Link>
      <Link className="link" to="/chi">弛</Link>
      <Link className="link" to="/about-me">About</Link>
    </header>
    <main>
      <Route exact path="/zhang" component={BusyPage} />
      <Route exact path="/chi" component={EasyPage} />
      <Route exact path="/about-me" component={About} />
      <Route component={EasyPage} />
    </main>
  </div>
)

export default App

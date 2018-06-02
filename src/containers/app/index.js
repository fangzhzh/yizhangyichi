import React from 'react';
import UserContext from 'userContext';
import { Route, Switch } from 'react-router-dom';
import BusyPage from '../busy/busypage';
import EasyPage from '../easy/easypage';
import LoginPage from '../loginPage';
import About from '../about';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleAccessToken: '',
      accessToken: '',
      todos: '',
      setGoogleAccessToken: (accessToken) => {
        console.log("App accessToken", accessToken);
        this.setState({ setGoogleAccessToken: accessToken });
      },
      setAccessToken: (accessToken) => {
        this.setState({
          accessToken,
        });
      },
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/zhang" component={BusyPage} />
            <Route path="/chi" component={EasyPage} />
            <Route path="/about-me" component={About} />
            <Route path="/" component={EasyPage} />
          </Switch>
        </div>
      </UserContext.Provider>
    );
  }
}

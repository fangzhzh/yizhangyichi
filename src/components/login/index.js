import React from 'react';
import { auth } from 'firebase';
// import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import UserContext from 'userContext';
import PropTypes from 'prop-types';
import './login.css';

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getUIConfig = this.getUIConfig.bind(this);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this, 'shouldComponentUpdate', nextState);
  //   if (nextProps.location.pathname !== nextState.location.pathname) {
  //     return true;
  //   }
  //   return false;
  // }

  getUIConfig(setGoogleAccessToken) {
    const { history, location } = this.props;
    return {
      signInFlow: 'popup',
      signInSuccessUrl: '/chi',
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          console.log(
            'Login signInSuccessWithAuthResult',
            authResult,
            history,
            ' current location',
            location,
          );
          const { accessToken } = authResult.credential;
          console.log(
            'Login signInSuccessWithAuthResult after history push',
            ' current location',
            location,
          );
          setGoogleAccessToken(accessToken);
          history.push('/chi');
          history.go('/chi');
          return false;
        },
      },
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: ['https://www.googleapis.com/auth/plus.login'],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account',
          },
        },
        // auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };
  }

  render() {
    console.log(this, 'render', this.props);
    return (
      <UserContext.Consumer>
        {({ setGoogleAccessToken }) => (
          <div className="login">
            <img className="bg" alt="background" />
            <div className="middle">
              <StyledFirebaseAuth
                uiConfig={this.getUIConfig(setGoogleAccessToken)}
                firebaseAuth={auth()}
              />
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

import React from 'react';
import { auth } from 'firebase';
// import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import UserContext from 'userContext';
import PropTypes from 'prop-types';
import './login.css';

export default class Login extends React.Component {
  static propTypes = {
    setGoogleAccessToken: PropTypes.func,
  };

  static defaultProps = {
    setGoogleAccessToken: () => {},
  };
  constructor(props) {
    super(props);
    this.uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/easy',
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          console.log('Login', authResult);
          this.props.setGoogleAccessToken(authResult.token);
          
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
    return (
      <UserContext.Consumer>
        { ({ setGoogleAccessToken }) => (
          <div className="login">
            <img className="bg" alt="background" />
            <div className="middle">
              <StyledFirebaseAuth
                uiConfig={{
                  signInFlow: 'popup',
                  signInSuccessUrl: '/easy',
                  callbacks: {
                    signInSuccessWithAuthResult(authResult, redirectUrl) {
                      console.log('Login signInSuccessWithAuthResult', authResult);
                      const { accessToken } = authResult.credential;
                      setGoogleAccessToken(accessToken);
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
                }}
                firebaseAuth={auth()}
              />
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

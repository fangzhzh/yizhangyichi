import React from 'react';
import { auth } from 'firebase';
import firebaseui from 'firebaseui';
import './login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.ui = new firebaseui.auth.AuthUI(auth());
    this.setup();
  }
  componentDidMount() {}

  componentWillUnmount() {
    this.ui.reset();
  }

  setup() {
    const uiConfig = {
      signInSuccessUrl: '/easy',
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          return true;
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
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
    };

    // Initialize the FirebaseUI Widget using Firebase.
    // The start method will wait until the DOM is loaded.
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div className="login">
        <div id="firebaseui-auth-container" />
      </div>
    );
  }
}

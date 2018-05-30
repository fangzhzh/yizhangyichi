import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './login.css';

const config = {
  apiKey: 'AIzaSyBVctIzfUAsFWGaREyKO34sEsclnRgDMB0',
  authDomain: 'yizhangyichi-dev.firebaseapp.com',
  databaseURL: 'https://yizhangyichi-dev.firebaseio.com',
  projectId: 'yizhangyichi-dev',
  storageBucket: 'yizhangyichi-dev.appspot.com',
  messagingSenderId: '994409866375',
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/easy',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

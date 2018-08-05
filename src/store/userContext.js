import React from 'react';

const user = {
  googleAccessToken: '',
  accessToken: '',
  setGoogleAccessToken: () => {},
  setAccessToken: () => {},
};

const UserContext = React.createContext(user);
export default UserContext;

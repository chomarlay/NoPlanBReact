import React, { useState } from 'react';
import AuthContext from './authContext';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: '',
  };

  const [state, setState] = useState(initialState);

  const login = (loginUser) => {
    setState({ ...state, isAuthenticated: true, user: loginUser });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

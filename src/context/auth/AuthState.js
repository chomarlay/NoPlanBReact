import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from './AuthTypes';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login
  const login = (formData) => {
    // TODO - Call backend API
    dispatch({ type: LOGIN_SUCCESS, payload: formData });
  };

  // Register
  const register = (formData) => {
    // TODO - Call backend API
    dispatch({ type: REGISTER_SUCCESS, payload: formData });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

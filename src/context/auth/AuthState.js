import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
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
    loading: true,
    user: { email: '', password: '' },
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:8080/signin',
        formData,
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: formData });
    } catch (err) {
      console.log('Login error');
    }
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
        loading: state.loading,
        login,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

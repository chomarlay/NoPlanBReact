import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from './../../utils/setAuthToken';
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
    user: { email: '', username: '' },
    error: '',
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
        'http://localhost:9090/signin',
        formData,
        config
      );
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data.message
          : 'Server not available!!!',
      });
    }
  };

  // Register
  const register = (formData) => {
    // TODO - Call backend API
    dispatch({ type: REGISTER_SUCCESS, payload: formData });
  };

  // Logout
  const logout = (logout) => {
    dispatch({ type: LOGOUT });
  };

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // if (localStorage.token) {
    //   // set token in axios global header
    //   console.log('set token in axios header');
    //   axios.defaults.headers.common['x-auth-token'] = localStorage.token;
    // } else {
    //   delete axios.defaults.headers.common['x-auth-token'];
    // }
    console.log(localStorage.token);
    // const config = {
    //   headers: {
    //     // 'Content-Type': 'application/json',
    //     'x-auth-token': localStorage.token,
    //     'access-control-Allow-Origin': '*',
    //   },
    // };
    try {
      const res = await axios.get('http://localhost:9090/auth');
      console.log(res.data);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
          ? err.response.data.message
          : 'Server not available!!!',
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

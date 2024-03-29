import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from './../../utils/setAuthToken';
import configData from '../../config.json';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERROR,
} from './AuthTypes';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null,
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
        configData.SERVER_URL + '/signin',
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
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        configData.SERVER_URL + '/signup',
        formData,
        config
      );
      console.log(res.data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data.message
          : 'Server not available!!!',
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // clearError
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(localStorage.token);
    try {
      const res = await axios.get(configData.SERVER_URL + '/auth');
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
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

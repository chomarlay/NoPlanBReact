import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from './AuthTypes';

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.payload.accessToken,
        error: '',
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        error: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
        user: { email: '', username: '' },
        token: null,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: '',
        user: { email: '', password: '' },
        token: null,
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      return {
        state,
      };
    default:
      return { state };
  }
}

export default authReducer;

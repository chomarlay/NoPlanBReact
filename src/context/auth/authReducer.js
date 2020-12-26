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
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case USER_LOADED:
    case AUTH_ERROR:
      return {
        state,
      };
    default:
      return { state };
  }
}

export default authReducer;

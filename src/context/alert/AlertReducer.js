import { INSERT_ALERT } from './AlertTypes';

const AlertReducer = (state, action) => {
  switch (action.type) {
    case INSERT_ALERT:
      return {
        ...state,
        message: action.payload.message,
        alertType: action.payload.alertType,
      };

    default:
      return { ...state };
  }
};

export default AlertReducer;

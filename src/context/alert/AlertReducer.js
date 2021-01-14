import { INSERT_ALERT, REMOVE_ALERT } from './AlertTypes';

const AlertReducer = (state, action) => {
  switch (action.type) {
    case INSERT_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload); // remove the alert with id from state
    default:
      return { state };
  }
};

export default AlertReducer;

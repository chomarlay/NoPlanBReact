import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { INSERT_ALERT, ALERT_ERROR, ALERT_INFO } from './AlertTypes';

const AlertState = (props) => {
  const initialState = { message: '', alertType: '' };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const alertError = (msg) => {
    dispatch({
      type: INSERT_ALERT,
      payload: { message: msg, alertType: ALERT_ERROR },
    });
  };

  const alertInfo = (msg) => {
    dispatch({
      type: INSERT_ALERT,
      payload: { message: msg, alertType: ALERT_INFO },
    });
  };

  return (
    <AlertContext.Provider
      value={{
        message: state.message,
        alertType: state.alertType,
        alertError,
        alertInfo,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

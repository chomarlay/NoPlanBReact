import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { v4 as uuidv4 } from 'uuid';
import {
  INSERT_ALERT,
  ALERT_ERROR,
  ALERT_INFO,
  REMOVE_ALERT,
} from './AlertTypes';

const AlertState = (props) => {
  // const initialState = { message: '', alertType: '' };
  const initialState = []; // empty alert messages - Alert object will be made up of {message, alertType}
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    const msgId = uuidv4();
    dispatch({
      type: INSERT_ALERT,
      payload: { id: msgId, message: msg, alertType: type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: msgId }), 3000);
  };

  const alertError = (msg) => {
    setAlert(msg, ALERT_ERROR);
  };

  const alertInfo = (msg) => {
    setAlert(msg, ALERT_INFO);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        alertError,
        alertInfo,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

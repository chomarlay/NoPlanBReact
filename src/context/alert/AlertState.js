import React, { useReducer, useState } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { INSERT_ALERT } from './AlertTypes';

const AlertState = (props) => {
  const initialState = { message: '', type: '' };
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const [stateW, setstate] = useState({ warn: '' });

  const alertError = (message) => {
    dispatch({ type: INSERT_ALERT, payload: message });
  };

  const alertWarning = (message) => {
    setstate({ ...stateW, warn: message });
  };

  return (
    <AlertContext.Provider
      value={{
        message: state.message,
        alertError,
        warn: stateW.warn,
        alertWarning,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

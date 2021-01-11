import React from 'react';
import { AlertContainer, ErrorAlertText, InfoAlertText } from './AlertStyled';
import useAlert from './../../../context/alert/useAlert';
import { ALERT_ERROR } from './../../../context/alert/AlertTypes';

const Alert = () => {
  const { message, alertType } = useAlert();
  return (
    <AlertContainer>
      {message ? (
        alertType === ALERT_ERROR ? (
          <ErrorAlertText>{message}</ErrorAlertText>
        ) : (
          <InfoAlertText>{message}</InfoAlertText>
        )
      ) : (
        ''
      )}
    </AlertContainer>
  );
};
export default Alert;

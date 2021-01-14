import React from 'react';
import { AlertContainer, ErrorAlertText, InfoAlertText } from './AlertStyled';
import useAlert from './../../../context/alert/useAlert';
import { ALERT_ERROR } from './../../../context/alert/AlertTypes';

const Alert = () => {
  const { alerts } = useAlert();
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertContainer>
        {alert.alertType === ALERT_ERROR ? (
          <ErrorAlertText>{alert.message}</ErrorAlertText>
        ) : (
          <InfoAlertText>{alert.message}</InfoAlertText>
        )}
      </AlertContainer>
    ))
  );
};
export default Alert;

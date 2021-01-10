import React from 'react';
import { AlertContainer, ErrorAlertText } from './AlertStyled';
import useAlert from './../../../context/alert/useAlert';
const Alert = () => {
  const { message } = useAlert();
  return (
    <AlertContainer>
      {message ? <ErrorAlertText>{message}</ErrorAlertText> : ''}
    </AlertContainer>
  );
};
export default Alert;

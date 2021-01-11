import styled from 'styled-components';

export const AlertContainer = styled.div`
  max-width: 1000px;
  margin: 0.5rem auto;
  overflow: hidden;
  padding: 0 2rem;
  border: 2px solid #ccc;
`;

export const ErrorAlertText = styled.h3`
  color: ${(props) => props.theme.error};
  font-size: 1.2rem;
  text-align: left;
`;

export const WarningAlertText = styled.h3`
  color: ${(props) => props.theme.warning};
  font-size: 1.2rem;
  text-align: left;
`;

export const InfoAlertText = styled.h3`
  color: ${(props) => props.theme.info};
  font-size: 1.2rem;
  text-align: left;
`;

import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 10;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
body {
    background-color:${(props) => props.theme.backgroundColor};
}
`;
export const ButtonLink = styled(Link)`
  color: ${(props) => props.theme.Primary};
  font-size: 1.2rem;
  text-justify: right;
  text-decoration: none;
  padding: 0.45rem;
  margin: 0 0.25rem;
`;
export const SubmitButton = styled.input.attrs({ type: 'submit' })`
  color: ${(props) => props.theme.altPrimary};
  background-color: ${(props) => props.theme.altBackgroundColor};
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
`;
export const Button = styled.button`
  color: ${(props) => props.theme.altPrimary};
  background-color: ${(props) => props.theme.altBackgroundColor};
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export const ButtonGroup = styled.div`
  z-index: 0;
  width: 30%;
  /* max-width: 1500px; */
  margin-right: auto;
  margin-left: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 70px;
  grid-gap: 5px;
`;
export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 1.2rem;
  text-align: left;
`;

export const ErrorText = styled.h3`
  color: ${(props) => props.theme.error};
  font-size: 1.2rem;
  text-align: left;
`;
export const Container = styled.div`
  z-index: 0;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
`;

export const ItemContainer = styled.div`
  z-index: 0;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin: 1rem auto;
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 10fr 1fr 1fr;
  grid-template-rows: 20px 20px;
  grid-gap: 5px;
`;

export const Item = styled.div`
  display: flex;
  padding: 0.5rem;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0.5rem auto;
  overflow: hidden;
  padding: 2rem;
  border-radius: 5px;
  border: 2px solid #ccc;
`;

export const ItemFormContainer = styled.div`
  max-width: 1000px;
  margin: 0.5rem auto;
  overflow: hidden;
  padding: 2rem;
  border-radius: 5px;
  border: 2px solid #ccc;
`;

export const FormFieldGroup = styled.div`
  margin: 1rem 0;
  /* label {
    margin: 0.2rem 0;
    font-size: 1.2rem;
    width: 100%;
    color: ${(props) => props.theme.textColor};
  }

  input {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 2.2rem;
    border: 2px solid #ccc;
    margin-top: 0.5rem;
    color: ${(props) => props.theme.textColor};
  } */
`;

export const FormFieldLabel = styled.label`
  margin: 0.2rem 0;
  font-size: 1.2rem;
  width: 100%;
  color: ${(props) => props.theme.textColor};
`;

export const FormFieldInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.textColor};
`;
// @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
// }

export default GlobalStyle;

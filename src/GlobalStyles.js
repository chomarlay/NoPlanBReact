import styled, { createGlobalStyle } from 'styled-components';

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

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 1.5rem;
  text-align: left;
`;

export const Container = styled.div`
  z-index: 0;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 100px;
`;

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0.5rem auto;
  overflow: hidden;
  padding: 0 2rem;
`;

export const FormFieldGroup = styled.div`
  margin: 1rem 0;
  label {
    margin: 0.2rem 0;
    font-size: 1.2rem;
    width: 100%;
    color: ${(props) => props.theme.textColor};
  }
  input {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    margin-top: 0.5rem;
    color: ${(props) => props.theme.textColor};
  }
`;

// export const FormFieldLabel = styled.text`
//     margin: 0.2rem 0;
//     font-size: 1.2rem;
//     width: 90%;
//     color: ${(props)=> props.theme.textColor};
// `;

// export const FormFieldInput = styled.input`
//     display: block;
//     width: 100%;
//     padding: 0.4rem;
//     font-size: 1.2rem;
//     border:2px solid #ccc;
//     margin-top: 0.5rem;
//     color: ${(props)=> props.theme.textColor};
// `;
// @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
// }

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

export default GlobalStyle;

import React from 'react';
import {
  StyledH1,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
} from '../../GlobalStyles';

const Login = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Please enter all fields.', 'danger');
    props.history.push('/today');
  };
  return (
    <FormContainer>
      <StyledH1>Account Login</StyledH1>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
        </FormFieldGroup>
        <SubmitButton value='Login' />
      </form>
    </FormContainer>
  );
};

export default Login;

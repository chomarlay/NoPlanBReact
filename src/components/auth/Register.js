import React from 'react';
import {
  StyledH1,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
} from '../../GlobalStyles';

const onSubmit = (e) => {
  e.preventDefault();
  console.log('Please enter all fields.', 'danger');
};

const Register = () => {
  return (
    <FormContainer>
      <StyledH1>Account Register</StyledH1>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor='password2'>Conifrm Password</label>
          <input type='password' name='password2' />
        </FormFieldGroup>
        <SubmitButton value='Register' />
      </form>
    </FormContainer>
  );
};

export default Register;

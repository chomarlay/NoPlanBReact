import React, { useState, useEffect } from 'react';
import useAuth from './../../context/auth/useAuth';
import useAlert from './../../context/alert/useAlert';
import {
  StyledH1,
  FormContainer,
  FormFieldGroup,
  FormFieldLabel,
  FormFieldInput,
  SubmitButton,
} from '../../GlobalStyles';

const Login = (props) => {
  const { isAuthenticated, user, error, clearError, login } = useAuth();
  const { alertError } = useAlert();

  useEffect(() => {
    if (isAuthenticated && user) {
      props.history.push('/today');
    }
    if (error !== '') {
      alertError(error);
      clearError();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, user, error, props.history]);

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginDetails;

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alertError('Please enter both email and password');
    } else {
      login({ email, password });
    }
  };

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      <StyledH1>Account Login</StyledH1>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <FormFieldLabel htmlFor='email'>Email Address</FormFieldLabel>
          <FormFieldInput
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <FormFieldLabel htmlFor='password'>Password</FormFieldLabel>
          <FormFieldInput
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </FormFieldGroup>
        <SubmitButton value='Login' />
      </form>
    </FormContainer>
  );
};

export default Login;

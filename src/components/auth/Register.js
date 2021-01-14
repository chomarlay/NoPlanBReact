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
  ErrorText,
} from '../../GlobalStyles';

const Register = (props) => {
  // const authContext = useAuth();
  const { register, isAuthenticated, user, error, clearError } = useAuth();
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

  const [registerDetails, setRegisterDetails] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { username, email, password, password2 } = registerDetails;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      password2 === ''
    ) {
      alertError('Please enter all fields');
    } else if (password !== password2) {
      alertError('Passwords do not match');
    } else {
      register({ username, email, password });
    }
  };

  const onChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      {error ? <ErrorText>{error}</ErrorText> : ''}
      <StyledH1>Account Register</StyledH1>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <FormFieldLabel htmlFor='name'>Name</FormFieldLabel>
          <FormFieldInput
            type='text'
            name='username'
            value={username}
            onChange={onChange}
          />
        </FormFieldGroup>
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
        <FormFieldGroup>
          <FormFieldLabel htmlFor='password2'>Conifrm Password</FormFieldLabel>
          <FormFieldInput
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </FormFieldGroup>
        <SubmitButton value='Register' />
      </form>
    </FormContainer>
  );
};

export default Register;

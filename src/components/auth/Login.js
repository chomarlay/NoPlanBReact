import React, { useState, useEffect } from 'react';
import useAuth from './../../context/auth/useAuth';
import useAlert from './../../context/alert/useAlert';
import {
  StyledH1,
  ErrorText,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
} from '../../GlobalStyles';

const Login = (props) => {
  const { isAuthenticated, user, error, login } = useAuth();
  const { alertError } = useAlert();

  useEffect(() => {
    if (isAuthenticated && user) {
      props.history.push('/today');
    }
    if (error !== '') {
      alertError(error);
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
    login({ email, password });
  };

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      {error ? <ErrorText> {error} </ErrorText> : ''}
      <StyledH1>Account Login</StyledH1>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor='password'>Password</label>
          <input
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

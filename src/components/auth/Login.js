import React, { useState, useContext, useEffect } from 'react';
import AuthContext from './../../context/auth/authContext';
import {
  StyledH1,
  ErrorText,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
} from '../../GlobalStyles';

const Login = (props) => {
  const { isAuthenticated, user, error, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/today');
    }
    if (error) {
      console.log(error);
    }
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

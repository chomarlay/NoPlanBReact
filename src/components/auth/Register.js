import React, { useState, useEffect } from 'react';
import useAuth from './../../context/auth/useAuth';
import {
  StyledH1,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
  ErrorText,
} from '../../GlobalStyles';

const Register = (props) => {
  const authContext = useAuth();
  const { register, isAuthenticated, user, error } = authContext;
  useEffect(() => {
    if (isAuthenticated && user) {
      props.history.push('/today');
    }
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
    register({ username, email, password });
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
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
          />
        </FormFieldGroup>
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
        <FormFieldGroup>
          <label htmlFor='password2'>Conifrm Password</label>
          <input
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

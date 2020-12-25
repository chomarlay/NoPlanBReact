import React, { useState, useContext } from 'react';
import AuthContext from './../../context/auth/authContext';
import {
  StyledH1,
  FormContainer,
  FormFieldGroup,
  SubmitButton,
} from '../../GlobalStyles';

const Login = (props) => {
  const { login } = useContext(AuthContext);

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginDetails;

  const onSubmit = (e) => {
    e.preventDefault();
    login(email);
    props.history.push('/today');
  };

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
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

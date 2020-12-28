import React, { useContext } from 'react';
import { Container, Title } from '../../GlobalStyles';
import AuthContext from '../../context/auth/authContext';

const Today = () => {
  const { user } = useContext(AuthContext);
  const { email, password } = user;

  return (
    <Container>
      <Title>
        Today tasks for {email} - {password}{' '}
      </Title>
    </Container>
  );
};
export default Today;

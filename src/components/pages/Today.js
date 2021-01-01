import React from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';

const Today = () => {
  const { isAuthenticated, user } = useAuth();
  const { email, username } = user;
  return (
    <Container>
      <Title>
        Today tasks - {email} - {username} -
        {isAuthenticated ? 'logged in' : 'not logged in'}
      </Title>
    </Container>
  );
};
export default Today;

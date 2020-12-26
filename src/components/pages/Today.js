import React, { useContext } from 'react';
import { Container, Title } from '../../GlobalStyles';
import AuthContext from '../../context/auth/authContext';

const Today = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Title>
        Today tasks for {user.email} - {user.password}
      </Title>
    </Container>
  );
};
export default Today;

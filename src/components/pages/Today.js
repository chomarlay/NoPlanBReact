import React, { useEffect } from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';
import useNpb from '../../context/noplanb/useNpb';

const Today = () => {
  const { isAuthenticated, user } = useAuth();
  const { todayList, getTodayList } = useNpb();
  const { email, username } = user;

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Retrieve today list.. ');
      getTodayList();
      // clearError();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>
        Today tasks - {email} - {username} -
        {isAuthenticated ? 'logged in' : 'not logged in'}
      </Title>
      <div>{todayList}</div>
    </Container>
  );
};
export default Today;

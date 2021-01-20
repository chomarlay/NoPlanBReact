import React from 'react';
import { Container, Title } from '../../GlobalStyles';
import useNpb from '../../context/noplanb/useNpb';

const Upcoming = () => {
  const { upcomingList } = useNpb;
  return (
    <Container>
      <Title>Upcoming</Title>
      <div>{upcomingList}</div>
    </Container>
  );
};

export default Upcoming;

import React from 'react';
import { Container, Title } from '../../GlobalStyles';
import useNpb from '../../context/noplanb/useNpb';

const Noplanb = () => {
  const { noPlanBList } = useNpb;
  return (
    <Container>
      <Title>NoPlanB</Title>
      <div>{noPlanBList}</div>
    </Container>
  );
};

export default Noplanb;

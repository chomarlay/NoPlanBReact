import React, { useEffect } from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';
import useNpb from '../../context/noplanb/useNpb';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const { projects, getProjects } = useNpb();

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Retrieve Projects.. ');
      getProjects();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>Projects</Title>
      <div>{projects.map((p) => p.title)}</div>
    </Container>
  );
};
export default Projects;

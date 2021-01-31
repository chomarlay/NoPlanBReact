import React, { useEffect } from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';
import useNpb from '../../context/noplanb/useNpb';
import ProjectItem from '../Projects/ProjectItem';
import { ButtonLink } from '../../GlobalStyles';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const { projects, getProjects } = useNpb();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(`Retrieve Projects.. `);
      getProjects();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>Projects</Title>
      <ButtonLink to='/Project'>+ Add</ButtonLink>
      {projects != null ? (
        projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))
      ) : (
        <div>No projects</div>
      )}
    </Container>
  );
};
export default Projects;

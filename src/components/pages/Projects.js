import React, { useEffect, useState } from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';
import useNpb from '../../context/noplanb/useNpb';
import ProjectItem from '../Projects/ProjectItem';
import { ButtonLink, Button } from '../../GlobalStyles';
import ProjectForm from '../Projects/ProjectForm';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const {
    projects,
    getProjects,
    showProjectForm,
    toggleProjectForm,
  } = useNpb();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(`Retrieve Projects.. `);
      getProjects();
    }
    // eslint-disable-next-line
  }, []);

  const addProject = () => {
    toggleProjectForm(!showProjectForm);
  };
  return (
    <Container>
      <Title>Projects</Title>
      <Button onClick={addProject}>+ Add</Button>
      {showProjectForm ? <ProjectForm /> : ''}
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

import React, { useEffect } from 'react';
import { Container, Title } from '../../GlobalStyles';
import useAuth from '../../context/auth/useAuth';
import useNpb from '../../context/noplanb/useNpb';
import useAlert from '../../context/alert/useAlert';
import ProjectItem from '../Projects/ProjectItem';
import { Button } from '../../GlobalStyles';
import ProjectForm from '../Projects/ProjectForm';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const { alertError } = useAlert();
  const {
    projects,
    getProjects,
    showProjectForm,
    toggleProjectForm,
    refreshProjects,
    error,
    clearError,
  } = useNpb();

  useEffect(() => {
    if (isAuthenticated) {
      getProjects();
    }
    if (error !== '') {
      alertError(error);
      clearError();
    }
    // eslint-disable-next-line
  }, [refreshProjects, error]);

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

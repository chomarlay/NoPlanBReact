import React, { useState } from 'react';
import {
  Title,
  ItemFormContainer,
  FormFieldGroup,
  FormFieldLabel,
  FormFieldInput,
  ButtonGroup,
  SubmitButton,
  Button,
} from '../../GlobalStyles';
import useNpb from '../../context/noplanb/useNpb';
import useAlert from '../../context/alert/useAlert';

const ProjectForm = () => {
  const { createProject, toggleProjectForm } = useNpb();
  const { alertError } = useAlert();
  const [project, setProject] = useState({ title: '', description: '' });
  const { title, description } = project;

  const onCancel = (e) => {
    e.preventDefault();
    toggleProjectForm(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (project.title === '') {
      alertError('Please enter the Project Title');
    } else {
      createProject(project);
    }
  };

  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  return (
    <ItemFormContainer>
      <Title>Add Project</Title>
      <form onSubmit={onSubmit}>
        <FormFieldGroup Htmlfor=''>
          <FormFieldLabel>Title</FormFieldLabel>
          <FormFieldInput
            name='title'
            type='text'
            value={title}
            onChange={onChange}
          />
        </FormFieldGroup>
        <FormFieldGroup>
          <FormFieldLabel HtmlFor='description'>Description</FormFieldLabel>
          <FormFieldInput
            name='description'
            type='text'
            value={description}
            onChange={onChange}
          />
        </FormFieldGroup>
        <ButtonGroup>
          <SubmitButton value='Save' />
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </form>
    </ItemFormContainer>
  );
};

export default ProjectForm;

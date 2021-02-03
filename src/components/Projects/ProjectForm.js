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

const ProjectForm = () => {
  const { createProject } = useNpb();
  const initialState = { title: '' };
  const [project, setProject] = useState(initialState);

  const onCancel = (e) => {
    e.preventDefault();
    console.log('Exit add project');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('save add project');
    setProject({ title: '180 Days Challenge' });
    createProject(project);
  };

  return (
    <ItemFormContainer>
      <Title>Add Project</Title>
      <form onSubmit={onSubmit}>
        <FormFieldGroup>
          <FormFieldLabel>Title</FormFieldLabel>
          <FormFieldInput />
        </FormFieldGroup>
        <FormFieldGroup>
          <FormFieldLabel>Description</FormFieldLabel>
          <FormFieldInput />
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

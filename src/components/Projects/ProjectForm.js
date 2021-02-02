import React from 'react';
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

const ProjectForm = () => {
  return (
    <ItemFormContainer>
      <Title>Add Project</Title>
      <form>
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
          <Button>Cancel</Button>
        </ButtonGroup>
      </form>
    </ItemFormContainer>
  );
};

export default ProjectForm;

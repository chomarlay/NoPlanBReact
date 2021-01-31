import React from 'react';
import { ItemContainer, Item } from '../../GlobalStyles';
import * as FcIcons from 'react-icons/fc';
import { ButtonLink } from '../../GlobalStyles';

const ProjectItem = ({ project }) => {
  return (
    <ItemContainer>
      <Item>{project.title}</Item>
      <Item>
        <ButtonLink to='/Project'>
          <FcIcons.FcTodoList />
          Edit
        </ButtonLink>
      </Item>
      <Item>
        <ButtonLink to='/Project'>
          <FcIcons.FcTodoList />
          Tasks
        </ButtonLink>
      </Item>
    </ItemContainer>
  );
};

export default ProjectItem;

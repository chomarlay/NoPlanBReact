import React, { useReducer } from 'react';
import NpbContext from './NpbContext';
import NpbReducer from './NpbReducer';
import configData from '../../config.json';

import {
  GET_TODAY_LIST,
  GET_NOPLANB_LIST,
  GET_UPCOMING_LIST,
  GET_PROJECTS,
  SET_ERROR,
  CLEAR_ERROR,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  TOGGLE_PROJECT_FORM,
} from './NpbTypes';
import axios from 'axios';

const NpbState = (props) => {
  const initialState = {
    todayList: '',
    noPlanBList: '',
    upComingList: '',
    projects: null,
    currentProject: null,
    showProjectForm: false,
    refreshProjects: false,
    error: '',
  };
  const [state, dispatch] = useReducer(NpbReducer, initialState);

  // get Today list
  const getTodayList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(
        configData.SERVER_URL + '/tasks?dueindays=1',
        config
      );
      console.log(`Found : ${res.data.length}`);
      console.log(res.data.map((r) => r.title));
      dispatch({
        type: GET_TODAY_LIST,
        payload: `today list - retrieved ${res.data}`,
      });
    } catch (err) {
      console.log('Error retrieving Today tasks');
      dispatch({
        type: SET_ERROR,
        payload: `today list - error ${err.response}`,
      });
    }
  };

  // get NoPlanB list
  const getNoPlanBList = () => {
    dispatch({ type: GET_NOPLANB_LIST, payload: 'NoPlanB list' });
  };

  // get Upcoming list
  const getUpComingList = () => {
    dispatch({ type: GET_UPCOMING_LIST, payload: 'Upcoming list' });
  };

  // get Projects
  const getProjects = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(configData.SERVER_URL + '/projects', config);
      console.log(`Found ::: ${res.data.length}`);
      console.log(res.data.map((r) => r.title));
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    } catch (err) {
      console.log('Error retrieving Projects');
      dispatch({
        type: SET_ERROR,
        payload: err.response
          ? err.response.data.message
          : 'Server not responding!',
      });
    }
  };

  const createProject = async (project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        configData.SERVER_URL + '/projects',
        project,
        config
      );
      dispatch({ type: CREATE_PROJECT, payload: res.data });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.response
          ? err.response.data.message
          : 'Server not responding!',
      });
    }
  };

  const updateProject = (project) => {
    console.log('Updating project...');
  };

  // clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  const toggleProjectForm = (show) => {
    dispatch({ type: TOGGLE_PROJECT_FORM, payload: show });
  };
  return (
    <NpbContext.Provider
      value={{
        todayList: state.todayList,
        noPlanBList: state.noPlanBList,
        upComingList: state.upComingList,
        projects: state.projects,
        currentProject: state.currentProject,
        showProjectForm: state.showProjectForm,
        refreshProjects: state.refreshProjects,
        error: state.error,
        getTodayList,
        getNoPlanBList,
        getUpComingList,
        getProjects,
        createProject,
        toggleProjectForm,
        clearError,
      }}
    >
      {props.children}
    </NpbContext.Provider>
  );
};

export default NpbState;

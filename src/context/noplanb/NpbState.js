import React, { useReducer } from 'react';
import NpbContext from './NpbContext';
import NpbReducer from './NpbReducer';
import {
  GET_TODAY_LIST,
  GET_NOPLANB_LIST,
  GET_UPCOMING_LIST,
  GET_PROJECTS,
  SET_ERROR,
  CLEAR_ERROR,
} from './NpbTypes';
import axios from 'axios';

const NpbState = (props) => {
  const initialState = {
    todayList: '',
    noPlanBList: '',
    upComingList: '',
    projects: null,
    currentProject: null,
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
        'http://localhost:9090/tasks?dueindays=1',
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
      const res = await axios.get('http://localhost:9090/projects', config);
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

  const createProject = (project) => {
    console.log('create Project :: ' + project.title);
  };

  // clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <NpbContext.Provider
      value={{
        todayList: state.todayList,
        noPlanBList: state.noPlanBList,
        upComingList: state.upComingList,
        projects: state.projects,
        currentProject: state.currentProject,
        error: state.error,
        getTodayList,
        getNoPlanBList,
        getUpComingList,
        getProjects,
        createProject,
        clearError,
      }}
    >
      {props.children}
    </NpbContext.Provider>
  );
};

export default NpbState;

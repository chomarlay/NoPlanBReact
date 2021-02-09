import {
  GET_NOPLANB_LIST,
  GET_TODAY_LIST,
  GET_UPCOMING_LIST,
  GET_PROJECTS,
  SET_ERROR,
  CLEAR_ERROR,
  CREATE_PROJECT,
  TOGGLE_PROJECT_FORM,
} from './NpbTypes';

const NpbReducer = (state, action) => {
  switch (action.type) {
    case GET_NOPLANB_LIST:
      return { ...state, noPlanBList: action.payload, error: null };
    case GET_TODAY_LIST:
      return { ...state, todayList: action.payload, error: null };
    case GET_UPCOMING_LIST:
      return { ...state, upcomingList: action.payload, error: null };
    case GET_PROJECTS:
      return { ...state, projects: action.payload, error: null };
    case CREATE_PROJECT:
      console.log(`create project payload : ${action.payload}`);
      return {
        ...state,
        currentProject: action.payload,
        error: null,
        showProjectForm: false,
        refreshProjects: true,
      };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case TOGGLE_PROJECT_FORM:
      return { ...state, showProjectForm: action.payload };
    default:
      return state;
  }
};

export default NpbReducer;

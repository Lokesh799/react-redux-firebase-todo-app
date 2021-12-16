export const SHOW_MODEL = 'SHOW_MODEL';
export const SHOW_TASK_DATE = 'SHOW_TASK_DATE';
export const SHOW_PROJECT = 'SHOW_PROJECT' 
export const TOGGLE_DATE = 'TOGGLE_DATE';
export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const SET_SHOW_QUICK_TASK = 'SET_SHOW_QUICK_TASK';
export const SET_TASK_DATE = 'SET_TASK_DATE';
export const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT';
export const SET_ACTIVE = 'SET_ACTIVE';
export const GET_SELECTED_TASK = 'GET_SELECTED_TASK';
export const GET_SELECTED_PROJECT ='GET_SELECTED_PROJECT';




export const showModel = (payload) => ({ type: SHOW_MODEL, payload });
export const showTaskDate = (payload) => ({ type: SHOW_TASK_DATE, payload });
export const showProject = (payload) => ({type : SHOW_PROJECT , payload});
export const toggleDate = (payload) => ({ type: TOGGLE_DATE, payload });
export const addProject = (payload) => ({ type: ADD_PROJECT, payload });
export const setProjectName = (payload) => ({ type: SET_PROJECT_NAME, payload });
export const setShowQuickAddTask = (payload) => ({ type: SET_SHOW_QUICK_TASK, payload });
export const setTaskDate = (payload) => ({ type: SET_TASK_DATE, payload });
export const setSelectedProject = (payload) => ({ type: SET_SELECTED_PROJECT, payload });
export const setActive = (payload) => ({ type: SET_ACTIVE, payload });
export const getSelectedTask = (payload) => ({ type: GET_SELECTED_TASK, payload });
export const getSelectedProject = (payload) => ({ type: GET_SELECTED_PROJECT,payload});
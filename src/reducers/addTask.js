import {
  SET_SHOW_QUICK_TASK,
  TOGGLE_DATE,
  SHOW_TASK_DATE,
  SET_TASK_DATE,
  SET_SELECTED_PROJECT,
  GET_SELECTED_TASK,
  SHOW_PROJECT,
  ADD_PROJECT,
  GET_SELECTED_PROJECT,
  SET_PROJECT_NAME,
  SET_SELECT_INDIVIDUAL_PROJECT,
  SET_SELECT_PROJECT_ID,
  SHOW_TASK_PROJECT,
  SET_SELECTED_PROJECT_NAME,
  SHOW_PROJECTS_ARRAY,
  SET_DARK_MODE ,

} from "../actions";

const initialState = {
  addQuickTask: [],
  setTaskDate: "",
  toggleDate: false,
  showDate: false,
  showSelected: 'INBOX',
  selectedTaskRecord: [],
  showProject: true,
  addProject: [],
  getProject: [],
  setName: [],
  selecteIndividauldProject: false,
  storeProjectId: "",
  showTask: true,
  setProjectName: [],
  showProjectArray: false,
  darkMode:true,
}

const addTask = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_QUICK_TASK:
      return {
        ...state,
        addQuickTask: action.payload,
      };
    case SET_TASK_DATE:
      return {
        ...state,
        setTaskDate: action.payload,
      };
    case TOGGLE_DATE:
      return {
        ...state,
        toggleDate: action.payload,
      };
    case SHOW_TASK_DATE:
      return {
        ...state,
        showDate: action.payload,
      };
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        showSelected: action.payload,
      };
    case GET_SELECTED_TASK:
      return {
        ...state,
        selectedTaskRecord: action.payload,
      };
    case SHOW_PROJECT:
      return {
        ...state,
        showProject: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        addProject: action.payload,
      };
    case GET_SELECTED_PROJECT:
      return {
        ...state,
        getProject: action.payload,
      };
    case SET_PROJECT_NAME:
      return {
        ...state,
        setName: action.payload,
      };
    case SET_SELECT_INDIVIDUAL_PROJECT:
      return {
        ...state,
        selecteIndividauldProject: action.payload,
      };
    case SET_SELECT_PROJECT_ID:
      return {
        ...state,
        storeProjectId: action.payload,
      };
    case SHOW_TASK_PROJECT:
      return {
        ...state,
        showTask: action.payload,
      };
    case SET_SELECTED_PROJECT_NAME:
      return {
        ...state,
        setProjectName: action.payload,
      };
    case SHOW_PROJECTS_ARRAY:
      return {
        ...state,
        showProjectArray: action.payload
      }
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      }
    default:
      return state;
  }
}

export default addTask;
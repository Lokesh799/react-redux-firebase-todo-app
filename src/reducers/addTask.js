import { SET_SHOW_QUICK_TASK,
  TOGGLE_DATE,
  SHOW_TASK_DATE,
  SET_TASK_DATE,
  SET_SELECTED_PROJECT,
  GET_SELECTED_TASK,
} from "../actions";

const initialState = {
  addQuickTask: [],
  setTaskDate:"",
  toggleDate: false,
  showDate:false,
  showSelected:'INBOX',
  selectedTaskRecord:[],
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
    default:
      return state;
  }
}

export default addTask;
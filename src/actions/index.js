export const SHOW_MODEL = 'SHOW_MODEL';
export const SET_SHOW_QUICK_TASK = 'SET_SHOW_QUICK_TASK';
export const TOGGLE_DATE = 'TOGGLE_DATE';
export const SHOW_TASK_DATE = 'SHOW_TASK_DATE';
export const SET_TASK_DATE = 'SET_TASK_DATE';


export const showModel = (payload) => ({ type: SHOW_MODEL, payload });
export const setShowQuickAddTask = (payload) => ({ type: SET_SHOW_QUICK_TASK, payload });
export const toggleDate = (payload) => ({ type: TOGGLE_DATE, payload });
export const showTaskDate = (payload) => ({ type: SHOW_TASK_DATE, payload });
export const setTaskDate = (payload) => ({ type: SET_TASK_DATE, payload });

import { SHOW_MODEL } from "../actions";

const initialState = {
  show: false,
}

const modelshow = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODEL:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}

export default modelshow;

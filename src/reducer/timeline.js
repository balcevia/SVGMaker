import types from "../type/timeline";

const init = {
  timelineInput: ""
};

const timelineReducer = (state = init, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE: {
      return {
        ...state,
        timelineInput: action.payload
      };
    }
    default:
      return state;
  }
};

export default timelineReducer;

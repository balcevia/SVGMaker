import types from '../type/image';

const initialState = {
  file: undefined
};
export const image = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_IMAGE:
      return {...state, file: action.payload};

    default:
      return state
  }
};
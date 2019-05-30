import types from "../type/timeline";

export const inputChange = val => {
  return {
    type: types.INPUT_CHANGE,
    payload: val
  };
};

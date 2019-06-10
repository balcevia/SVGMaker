import types from '../type/pose';
import {FormNames} from "../constants";

const initialState = {
  [FormNames.AngularForm]: 'init',
  [FormNames.ReactForm]: 'init',
  [FormNames.VueForm]: 'init',
  [FormNames.CustomSVGForm]: 'init'
};

export const pose = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_ANGULAR_POSE_STATE: {
      return {
        ...state,
        [FormNames.AngularForm]: action.payload
      }
    }
    case types.CHANGE_REACT_STATE: {
      return {
        ...state,
        [FormNames.ReactForm]: action.payload
      }
    }
    case types.CHANGE_VUE_STATE: {
      return {
        ...state,
        [FormNames.VueForm]: action.payload
      }
    }
    case types.CHANGE_CUSTOM_STATE: {
      return {
        ...state,
        [FormNames.CustomSVGForm]: action.payload
      }
    }

    default: return state;
  }
};
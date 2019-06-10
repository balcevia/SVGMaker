import types from '../type/pose';

const changeAngularState = (val) => ({
  type: types.CHANGE_ANGULAR_POSE_STATE,
  payload: val
});
const changeReactState = (val) => ({
  type: types.CHANGE_REACT_STATE,
  payload: val
});
const changeVueState = (val) => ({
  type: types.CHANGE_VUE_STATE,
  payload: val
});
const changeCustomSVGState = (val) => ({
  type: types.CHANGE_CUSTOM_STATE,
  payload: val
});

export default {
  changeAngularState,
  changeCustomSVGState,
  changeReactState,
  changeVueState
}
import types from '../type/image';

const addImage = (img) => ({
  type: types.ADD_IMAGE,
  payload: img
});


export default {
  addImage
}
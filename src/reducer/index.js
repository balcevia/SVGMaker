import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {pose} from "./pose-reducer";
import {image} from "./image-reducer";

const rootReducer = combineReducers({
  form: formReducer,
  pose: pose,
  image: image
});
export default rootReducer;

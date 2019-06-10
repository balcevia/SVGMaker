import React from 'react';
import {SettingForm} from "./SettingForm";
import {FormNames} from "../constants";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

let ReactForm = () => {
  return (
    <SettingForm showFileUploader={false} disabled={false}/>
  )
};

ReactForm = reduxForm({
  form: FormNames.ReactForm,
  destroyOnUnmount: false
})(ReactForm);

ReactForm = connect(state => ({
  initialValues: {
    isVisible: true,
    duration: 1000,
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0
  }
}))(ReactForm);

export default ReactForm;
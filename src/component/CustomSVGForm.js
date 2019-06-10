import React from 'react';
import {SettingForm} from "./SettingForm";
import {FormNames} from "../constants";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

let CustomSVGForm = ({disabled}) => {

  return (
    <div>
      <SettingForm showFileUploader={true} disabled={disabled}/>
    </div>
  )
};

CustomSVGForm = reduxForm({
  form: FormNames.CustomSVGForm,
  destroyOnUnmount: false
})(CustomSVGForm);

CustomSVGForm = connect(state => ({
  initialValues: {
    isVisible: false,
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
}))(CustomSVGForm);

export default CustomSVGForm;
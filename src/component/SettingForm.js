import React from "react";
import { Input } from "../common/Input";
import { Field, reduxForm } from "redux-form";
import { Button } from "../common/Button";

const SettingForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="timeline" component={Input} type="text" />
      <Button label="Submit" type="submit" />
    </form>
  );
};
export default reduxForm({
  form: "settingsForm"
})(SettingForm);

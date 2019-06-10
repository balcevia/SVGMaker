import React from "react";
import TextField from "@material-ui/core/TextField";

export const MyInput = ({label, input, ...other}) =>
  <TextField label={label}
             margin="normal"
             variant="outlined"
             {...input}
             {...other}/>;

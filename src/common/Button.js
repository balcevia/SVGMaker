import React from "react";
import Button from '@material-ui/core/Button';


export const MyButton = ({ label, type, onClick, color }) => (
  <Button variant="contained" type={type} onClick={onClick ? onClick : () => {}} color={color}>
    {label}
  </Button>
);

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const MyCheckBox = ({input, disabled}) => {
  return (
    <Checkbox
      checked={!!input.value}
      onChange={input.onChange}
      color="primary"
      disabled={disabled}
    />
  );
};
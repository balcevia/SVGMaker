import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const MySelect = ({label, values, input, children, ...otherProps}) => {

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={label}>
        {label}
      </InputLabel>
      <Select {...otherProps}
              {...input}
              id={label}
      >
        {
          values.map((val, idx) => (
            <MenuItem value={val} key={idx}>
              <em>{val}</em>
            </MenuItem>
          ))
        }

        {children}
      </Select>
    </FormControl>
  )
};
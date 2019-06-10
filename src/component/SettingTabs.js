import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingForm from "./SettingForm";

export const SettingTabs = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One"/>
        <Tab label="Item Two"/>
        <Tab label="Item Three"/>
      </Tabs>
      {value === 0 && <SettingForm />}
      {value === 1 && <p>Item Two</p>}
      {value === 2 && <p>Item Three</p>}
    </div>
  );
};

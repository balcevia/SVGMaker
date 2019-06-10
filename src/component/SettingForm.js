import React from "react";
import {Field} from 'redux-form';
import {MyInput} from "../common/Input";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import './SettingForm.scss';
import {MyCheckBox} from "../common/CheckBox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FileUploader from "../common/FileUploader";

export const SettingForm = ({showFileUploader, addImage, disabled}) => {
  return (
    <form className="setting-form">
      <FormControlLabel
        control={<Field name="isVisible" component={MyCheckBox}/>} label="Is Visible" disabled={disabled}/>
      <div style={{display: showFileUploader ? 'block' : 'none'}}>
        <FileUploader addImage={addImage}/>
      </div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <p>Duration</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Field name="duration" component={MyInput} type="number" label="Duration"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <p>Position</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item>
              <Field name="x" component={MyInput} type="number" label="X Position"/>
            </Grid>
            <Grid item>
              <Field name="y" component={MyInput} type="number" label="Y Position"/>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <p>Rotation</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item>
              <Field name="rotateX" component={MyInput} type="number" label="Rotate X"/>
            </Grid>
            <Grid item>
              <Field name="rotateY" component={MyInput} type="number" label="Rotate Y"/>
            </Grid>
            <Grid item>
              <Field name="rotateZ" component={MyInput} type="number" label="Rotate Z"/>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <p>Scale</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid item>
              <Field name="scaleX" component={MyInput} type="number" label="Scale X"/>
            </Grid>
            <Grid item>
              <Field name="scaleY" component={MyInput} type="number" label="Scale Y"/>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <p>Skew</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansion-panel-details">
          <Grid container>
            <Grid item>
              <Field name="skewX" component={MyInput} type="number" label="Skew X"/>
            </Grid>
            <Grid item>
              <Field name="skewY" component={MyInput} type="number" label="Skew Y"/>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </form>
  );
};

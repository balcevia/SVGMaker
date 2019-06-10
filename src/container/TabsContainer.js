import React from 'react';
import SettingFormContainer from "./SettingFormContainer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './TabsContainer.scss';
import {FormNames, PoseState} from "../constants";
import changePose from "../action/pose";
import {connect} from "react-redux";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import _ from 'lodash';

class TabsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      [FormNames.AngularForm]: undefined,
      [FormNames.ReactForm]: undefined,
      [FormNames.VueForm]: undefined,
      [FormNames.CustomSVGForm]: undefined,
    }
  }

  componentDidMount() {
    this.startInterval(_.get(this.props.form, `${FormNames.ReactForm}.values.duration`), FormNames.ReactForm);
    this.startInterval(_.get(this.props.form, `${FormNames.AngularForm}.values.duration`), FormNames.AngularForm);
    this.startInterval(_.get(this.props.form, `${FormNames.VueForm}.values.duration`), FormNames.VueForm);
    this.startInterval(_.get(this.props.form, `${FormNames.CustomSVGForm}.values.duration`), FormNames.CustomSVGForm);
  }

  componentWillReceiveProps(nextProps, newContext) {
    this.checkPropsForForm(FormNames.ReactForm, nextProps);
    this.checkPropsForForm(FormNames.AngularForm, nextProps);
    this.checkPropsForForm(FormNames.VueForm, nextProps);
    this.checkPropsForForm(FormNames.CustomSVGForm, nextProps);
  }

  checkPropsForForm = (formName, nextProps) => {
    const nextValues = _.get(nextProps.form, `${formName}.values`) || {};
    const values = _.get(this.props.form, `${formName}.values`) || {};
    if (values.duration && (nextValues.duration !== values.duration || this.props.pose[formName] !== nextProps.pose[formName])) {
      const duration = _.get(nextProps.form, `${formName}.values.duration`);
      clearInterval(this.state[formName]);
      this.startInterval(duration, formName);
    }
  };

  startInterval = (duration, formName) => {
    const intervalId = setInterval(() => {
      if (this.props.pose[formName] === PoseState.Init) {
        this.props.changePose(PoseState.Run, formName)
      } else {
        this.props.changePose(PoseState.Init, formName)
      }
    }, duration ? duration : 1000);
    this.setState({...this.state, [formName]: intervalId})
  };

  handleChange = (event, tab) => {
    this.setState({...this.state, value: tab})
  };

  render() {
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary"
              variant="fullWidth">
          <Tab label="React"/>
          <Tab label="Angular"/>
          <Tab label="Custom"/>
        </Tabs>
        <div>
          <Card>
            <CardContent className="card-content">
              <div style={{display: this.state.value === 0 ? 'block' : 'none'}}>
                <SettingFormContainer formName={FormNames.ReactForm}/>
              </div>
              <div style={{display: this.state.value === 1 ? 'block' : 'none'}}>
                <SettingFormContainer formName={FormNames.AngularForm}/>
              </div>
              <div style={{display: this.state.value === 2 ? 'block' : 'none'}}>
                <SettingFormContainer formName={FormNames.CustomSVGForm} uploaded={this.props.uploaded}/>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pose: state.pose,
  form: state.form,
  uploaded: state.image.file !== undefined
});
const mapDispatchToProps = (dispatch) => ({
  changePose: (val, formName) => {
    switch (formName) {
      case FormNames.AngularForm:
        return dispatch(changePose.changeAngularState(val));
      case FormNames.ReactForm:
        return dispatch(changePose.changeReactState(val));
      case FormNames.VueForm:
        return dispatch(changePose.changeVueState(val));
      case FormNames.CustomSVGForm:
        return dispatch(changePose.changeCustomSVGState(val));
      default:
        return null;
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
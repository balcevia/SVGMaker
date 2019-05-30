import React from "react";
import TimelineComponent from "../component/TimelineComponent";
import { inputChange } from "../action/timeline";
import { connect } from "react-redux";

const Timeline = props => {
  const change = val => {
    props.change(val.target.value);
  };
  return <TimelineComponent val={props.val} change={change} />;
};
const mapStateToProps = state => ({
  val: state.timeline.timelineInput
});
const mapDispatchToProps = dispatch => ({
  change: val => dispatch(inputChange(val))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

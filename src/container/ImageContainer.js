import React from 'react';
import {connect} from "react-redux";
import {Image} from "../component/Image";
import logo from '../logo.svg';
import angular from '../angular.svg';
import vue from '../vue.svg';
import './TabsContainer.scss';
import _ from 'lodash';
import Container from '@material-ui/core/Container';
import {FormNames} from "../constants";

class ImageContainer extends React.Component {
  render() {
    return (
      <Container style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto',
        gridColumnGap: '50px',
        gridRowGap: '50px'
      }}>
          <Image src={logo} pose={this.props.pose[FormNames.ReactForm]} formValues={this.props.reactForm} key={FormNames.ReactForm}
                 style={{display: this.props.isReactVisible ? 'block' : 'none'}}
          />
          <Image src={angular} pose={this.props.pose[FormNames.AngularForm]} formValues={this.props.angularForm} key={FormNames.AngularForm}
                 style={{display: this.props.isAngularVisible ? 'block' : 'none'}}
          />
          <Image src={vue} pose={this.props.pose[FormNames.Vue]} formValues={this.props.vueForm} key={FormNames.VueForm}
                 style={{display: this.props.isVueVisible ? 'block' : 'none'}}
          />
          <Image src={this.props.image} pose={this.props.pose[FormNames.CustomSVGForm]} formValues={this.props.customSVGForm} key={FormNames.CustomSVGForm}
                 style={{display: this.props.isCustomVisible ? 'block' : 'none'}}
          />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  pose: state.pose,
  angularForm: _.get(state, `form.${FormNames.AngularForm}.values`),
  reactForm: _.get(state, `form.${FormNames.ReactForm}.values`),
  vueForm: _.get(state, `form.${FormNames.VueForm}.values`),
  customSVGForm: _.get(state, `form.${FormNames.CustomSVGForm}.values`),
  isAngularVisible: _.get(state, `form.${FormNames.AngularForm}.values.isVisible`),
  isReactVisible: _.get(state, `form.${FormNames.ReactForm}.values.isVisible`),
  isVueVisible: _.get(state, `form.${FormNames.VueForm}.values.isVisible`),
  isCustomVisible: _.get(state, `form.${FormNames.CustomSVGForm}.values.isVisible`),
  image: _.get(state, `image.file`),
  state: state
});
export default connect(mapStateToProps, null)(ImageContainer);
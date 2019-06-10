import React from 'react';
import posed from 'react-pose';
import _ from 'lodash';
import './Image.scss';

const Img = posed.img({
  init: {
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    transition: ({duration}) => ({duration})
  },
  run: {
    x: ({x}) => +x,
    y: ({y}) => +y,
    rotateX: ({rotateX}) => +rotateX,
    rotateY: ({rotateY}) => +rotateY,
    rotateZ: ({rotateZ}) => +rotateZ,
    scaleX: ({scaleX}) => +scaleX,
    scaleY: ({scaleY}) => +scaleY,
    transition: ({duration}) => ({duration}),
    skewX: ({skewX}) => +skewX,
    skewY: ({skewY}) => +skewY
  }
});

export const Image = ({pose, formValues, ...otherProps}) => {
  return <Img pose={pose}
              {...otherProps}
              className="img"
              duration={_.get(formValues, 'duration')}
              x={_.get(formValues, 'x')}
              y={_.get(formValues, 'y')}
              rotateX={_.get(formValues, 'rotateX')}
              rotateY={_.get(formValues, 'rotateY')}
              rotateZ={_.get(formValues, 'rotateZ')}
              scaleX={_.get(formValues, 'scaleX')}
              scaleY={_.get(formValues, 'scaleY')}
              skewX={_.get(formValues, 'skewX')}
              skewY={_.get(formValues, 'skewY')}
  />
};
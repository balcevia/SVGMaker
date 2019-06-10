import React from 'react';
import Button from '@material-ui/core/Button';
import imgActions from "../action/image";
import {connect} from "react-redux";

export const FileUploader = ({addImage}) => {

  const onChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      addImage(reader.result);
    };
    reader.readAsDataURL(file)
  };
  return(
    <div>
      <input
        style={{display: 'none'}}
        id="raised-button-file"
        type="file"
        onChange={onChange} accept="image/svg+xml"
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addImage: (img) => dispatch(imgActions.addImage(img))
});

export default connect(null, mapDispatchToProps)(FileUploader)
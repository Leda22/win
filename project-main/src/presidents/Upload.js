
import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import "./Uploadcss.css";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {

      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText"></div>);
      }
  
      return (
        <div >
          <input accept="image/*" style={{ display: 'none'}} id="icon-button-file" type="file"   onChange={(e)=>this._handleImageChange(e)}/>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }
  export default App

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "../NavigationBar";
import { Control } from "react-redux-form";
import { Label, Button } from "reactstrap";
import { postCreator } from "../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    msg: state.message.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postCreator: (file) => {
    dispatch(postCreator(file));
  },
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUpload: null,
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handlePost(e) {
    e.preventDefault();
    this.props.postCreator(this.state.fileUpload);
  }
  handleChange(e) {
    this.setState({
      fileUpload: e.target.files[0],
    });
  }
  render() {
    return (
      <div className="container fullh pt-5">
        <NavigationBar />
        <br></br>
        <br></br>
        <form
          encType="multipart/form-data"
          className="former login py-5"
          action="#"
          onSubmit={(val) => this.handlePost(val)}
          onChange={this.handleChange}
        >
          <div className="row text-left">
            <div className="offset-1 col-6 mb-4">
              <b>{this.props.msg}</b>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-1 mb-4">
              <Label for="file">File</Label>
            </div>
            <div className="col-10">
              <Control.file
                model=".file"
                name="file"
                id="file"
                placeholder="file"
                className="bg-transparent text-white"
              />
            </div>
          </div>
          <div className="row  text-left ">
            <div className="offset-1 col-6 mb-4 px-5">
              <Button
                type="submit"
                className="btn w-100 bg-transparent"
                value="submit"
              >
                Upload
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

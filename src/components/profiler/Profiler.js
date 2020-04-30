import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import {
  profileImgUpdate,
  bioUpdate,
  passwordUpdate,
} from "./../../redux/actions/actionCreators";
import { Card } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { Label, Button } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    msg: state.message.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  profileImgUpdate: (file) => {
    dispatch(profileImgUpdate(file));
  },
  bioUpdate: (val) => {
    dispatch(bioUpdate(val));
  },
  passwordUpdate: (val) => {
    dispatch(passwordUpdate(val));
  },
});

class Profiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleProfileImgUpdate = this.handleProfileImgUpdate.bind(this);
    this.handleBioUpdate = this.handleBioUpdate.bind(this);
    this.handleProfileImgChange = this.handleProfileImgChange.bind(this);
  }
  handlePasswordUpdate(val) {
    this.props.passwordUpdate(val);
  }
  handleProfileImgUpdate(val) {
    val.preventDefault();
    this.props.profileImgUpdate(this.state.file);
  }
  handleBioUpdate(val) {
    this.props.bioUpdate(val);
  }
  handleProfileImgChange(e) {
    this.setState({
      file: e.target.files[0],
    });
  }
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <div className="pt-5 users posts">
          <Card className="bg-transparent border border-white p-4 mt-4 mb-2">
            <form
              encType="multipart/form-data"
              className="former login py-5"
              action=""
              onSubmit={(val) => this.handleProfileImgUpdate(val)}
              onChange={this.handleProfileImgChange}
            >
              <div className="row text-left">
                <div className="offset-1 col-6 mb-4">
                  <b>{this.props.msg}</b>
                </div>
              </div>
              <div className="row">
                <div className="offset-1 col-3 mb-4">
                  <Label for="file">Profile Image</Label>
                </div>
                <div className="col-8 col-sm-4">
                  <Control.file
                    model=".file"
                    name="file"
                    id="file"
                    placeholder="file"
                    className="bg-transparent text-white w-100"
                  />
                </div>
                <div className=" offset-1 col-sm-2 col-9">
                  <Button
                    type="submit"
                    className="btn w-100 bg-transparent"
                    value="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
            <LocalForm
              className="former login py-5"
              onSubmit={(val) => this.handleBioUpdate(val)}
            >
              <div className="row mt-3">
                <div className="offset-1 col-3 mb-4">
                  <Label for="bio">Bio</Label>
                </div>
                <div className="col-sm-4 col-7">
                  <Control.text
                    model=".bio"
                    name="bio"
                    id="bio"
                    placeholder="type new bio here..."
                    className="bg-transparent text-white w-100"
                  />
                </div>
                <div className=" offset-1 col-sm-2 col-9">
                  <Button
                    type="submit"
                    className="btn w-100 bg-transparent"
                    value="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </LocalForm>
            <LocalForm
              className="former login py-5"
              onSubmit={(val) => this.handlePasswordUpdate(val)}
            >
              <div className="row mt-3">
                <div className="offset-1 col-3 mb-4">
                  <Label for="password">New password</Label>
                </div>
                <div className="col-sm-4 col-7">
                  <Control.password
                    model=".password"
                    name="password"
                    id="password"
                    placeholder="type new password here..."
                    className="bg-transparent text-white w-100"
                  />
                </div>
                <div className=" offset-1 col-sm-2 col-9">
                  <Button
                    type="submit"
                    className="btn w-100 bg-transparent"
                    value="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </LocalForm>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profiler)
);

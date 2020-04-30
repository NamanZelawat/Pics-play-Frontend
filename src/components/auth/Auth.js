import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Control, LocalForm } from "react-redux-form";
import { Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import {
  login,
  signup,
  auth,
  page,
} from "./../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    author: state.auth.auth,
    pager: state.page.page,
    msg: state.message.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (values) => {
      dispatch(auth(values));
    },
    login: (values) => {
      dispatch(login(values));
    },
    signup: (values) => {
      dispatch(signup(values));
    },
    page: (val) => {
      dispatch(page(val));
    },
  };
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }
  handleLoginSubmit(values) {
    this.props.login(values);
  }
  handleSignupSubmit(values) {
    this.props.signup(values);
  }
  render() {
    if (this.props.author === true && this.props.pager === 0) {
      return (
        <div className="container fullh">
          <div className="row land text-center">
            <div className="col-12 col-sm-6 my-auto">
              <LocalForm
                onSubmit={(values) => this.handleLoginSubmit(values)}
                className="former login py-5"
              >
                <div className="row text-left">
                  <div className="offset-1 col-6 mb-4">
                    <b>{this.props.msg}</b>
                  </div>
                </div>
                <div className="row">
                  <div className="offset-1 col-1 mb-4">
                    <Label for="email">Email</Label>
                  </div>
                  <div className="col-10">
                    <Control.text
                      model=".email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      className="bg-transparent text-white"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="offset-1 col-1 mb-4">
                    <Label for="password">Password</Label>
                  </div>
                  <div className="col-10">
                    <Control.password
                      model=".password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-transparent text-white"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-4 px-5">
                    <Button type="submit" className="btn w-50 bg-transparent">
                      Login
                    </Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    New user...
                    <Link
                      to="#"
                      onClick={() => this.props.auth(this.props.author)}
                    >
                      {" "}
                      Register here.
                    </Link>
                  </div>
                </div>
              </LocalForm>
            </div>
            <div className="col-6 my-auto d-none d-sm-block">
              <img
                alt="Background"
                className="mb-5"
                src="images/logo_transparent.png"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.props.author === false && this.props.pager === 0) {
      return (
        <div className="container fullh">
          <div className="row land text-center">
            <div className="col-12 col-sm-6 my-auto">
              <LocalForm
                onSubmit={(values) => this.handleSignupSubmit(values)}
                className="former login py-5"
              >
                <div className="row text-left">
                  <div className="offset-1 col-6 mb-4">
                    <b>{this.props.msg}</b>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="col-5 mb-4">
                    <Label for="uername">Username</Label>
                  </div>
                  <div className="col-6">
                    <Control.text
                      model=".username"
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="bg-transparent text-white w-100"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className=" col-5 mb-4">
                    <Label for="email">Email</Label>
                  </div>
                  <div className="col-6">
                    <Control.text
                      model=".email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      className="bg-transparent text-white w-100"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 mb-4">
                    <Label for="password">Password</Label>
                  </div>
                  <div className="col-6">
                    <Control.password
                      model=".password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-transparent text-white w-100"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 mb-4">
                    <Label for="password">Confirm Password</Label>
                  </div>
                  <div className="col-6">
                    <Control.password
                      model=".confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="Confirm password"
                      className="bg-transparent text-white w-100"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-4 px-5">
                    <Button type="submit" className="btn w-50 bg-transparent">
                      Signup
                    </Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    Already have an account...
                    <Link
                      to="#"
                      onClick={() => this.props.auth(this.props.author)}
                    >
                      {" "}
                      Login here.
                    </Link>
                  </div>
                </div>
              </LocalForm>
            </div>
            <div className="col-6 my-auto  d-none d-sm-block">
              <img
                className="mb-5"
                src="images/logo_transparent.png"
                width="400"
                height="400"
                alt="mail logo"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.props.pager === 1) {
      this.props.page(0);
      this.props.auth(this.props.author);
      return <Redirect to="/auth" />;
    } else if (this.props.pager === 2) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/error" />;
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));

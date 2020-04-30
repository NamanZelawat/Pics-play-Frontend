import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Reset extends Component {
  componentDidMount() {
    localStorage.setItem("token", this.props.match.params.token);
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default Reset;

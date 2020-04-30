import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import Posts from "./../home/Posts";

const mapStateToProps = (state) => {
  return {
    token: state.token.token,
  };
};

class Land extends Component {
  render() {
    if (this.props.token !== "" || localStorage.token !== undefined) {
      return (
        <div className="container fullh pt-5">
          <NavigationBar />
          <Posts />
        </div>
      );
    } else {
      return (
        <div className="container fullh">
          <div className="row land text-center">
            <div className="col-12 my-auto">
              <img
                src="images/logo_transparent.png"
                width="350"
                height="350"
                alt="main logo"
              />
              <div className="mb-5">
                <div className="row">
                  <div className="col-12">
                    <h1 className="mb-3">Pics-pics</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mb-4">An open source social web app.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Link className="btn btn-primary mb-5" to="/auth">
                      Launch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps)(Land));

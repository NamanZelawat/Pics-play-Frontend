import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

class Err extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="err">
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <div className="container fullh cl1">
              <div className="row">
                <div className="col-6 cl2">
                  <p className="cl3">Error 404!</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6 cl4">
                  <p className="">
                    Mando cannot find the resource you requested.
                  </p>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Err));

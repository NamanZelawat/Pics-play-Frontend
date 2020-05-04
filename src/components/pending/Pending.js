import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import { pending } from "./../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    pendingData: state.pending.pending,
  };
};

const mapDispatchToProps = (dispatch) => ({
  pending: () => {
    dispatch(pending());
  },
});

class Pending extends Component {
  componentDidMount() {
    this.props.pending();
  }
  render() {
    if (this.props.pendingData.length === 0) {
      return (
        <div className="container fullh pt-5">
          <NavigationBar />
          <div className="pt-5">No pending requests.</div>
        </div>
      );
    } else {
      return (
        <div className="container fullh">
          <NavigationBar />
          <div className="posts search pt-5">
            <div className="pt-5">
              {this.props.pendingData.map((item, index) => (
                <Link to={"/search/" + item.username} className="text-white">
                  <div
                    class="media mb-3 border border-white rounded p-3"
                    key={index}
                  >
                    <img
                      src={item.profileImg}
                      class="mr-3 rounded-circle"
                      alt="..."
                      width="70"
                    />
                    <div class="media-body ml-2">
                      <h5 class="mt-0">@{item.username}</h5>
                      {item.bio}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Pending)
);

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import { friends } from "./../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    friendsData: state.friends.friends,
  };
};

const mapDispatchToProps = (dispatch) => ({
  friends: () => {
    dispatch(friends());
  },
});

class Chat extends Component {
  componentDidMount() {
    this.props.friends();
  }
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.friendsData.length === 0 ? (
          <div className="row pt-5">
            <h2 className="w-100 text-center pt-5">No friends yet...</h2>
          </div>
        ) : (
          <div className="posts search pt-5">
            {this.props.friendsData.map((item, index) => (
              <Link to={"/chat/" + item.username} className="text-white">
                <div
                  class="media mt-5 border border-white rounded p-3"
                  key={index}
                >
                  <img
                    src={item.profileImg}
                    class="mr-3 rounded-circle"
                    alt="..."
                    width="70"
                    height="70"
                  />
                  <div class="media-body ml-2">
                    <h5 class="mt-0">@{item.username}</h5>
                    {item.bio}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));

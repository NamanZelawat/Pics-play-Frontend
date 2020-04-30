import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, CardBody, CardText, CardImg } from "reactstrap";
import { posts, friends } from "../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    postsView: state.posts.posts,
    friendsData: state.friends.friends,
  };
};

const mapDispatchToProps = (dispatch) => ({
  posts: () => {
    dispatch(posts());
  },
  friends: () => {
    dispatch(friends());
  },
});

class Posts extends Component {
  componentDidMount() {
    this.props.posts();
    this.props.friends();
  }
  render() {
    if (
      this.props.postsView.length !== 0 &&
      this.props.friendsData.length !== 0
    ) {
      return (
        <div>
          <div className="row">
            <div className="limh posts col-12 col-sm-8">
              {this.props.postsView.map((item, index) => (
                <div key={index}>
                  <Card
                    className="bg-transparent border border-white mt-4 mb-2"
                    style={{ width: "100%" }}
                  >
                    <CardBody>
                      <CardText>@{item.username}</CardText>
                    </CardBody>
                    {/* <div className="imager"> */}
                    <CardImg
                      variant="bottom"
                      src={item.url}
                      style={{ padding: "1.25rem" }}
                      className="img-responsive"
                    />
                    {/* </div> */}
                    <CardBody>
                      <CardText>Caption.</CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="d-none d-sm-block col-sm-4 limh posts">
              {this.props.friendsData.map((item, index) => (
                <Link to={"/chat/" + item.username} className="text-white">
                  <div
                    class="media mt-4 border border-white rounded p-3"
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
          </div>
        </div>
      );
    } else if (
      this.props.postsView.length === 0 &&
      this.props.friendsData.length !== 0
    ) {
      return (
        <div className="row">
          <div className="limh posts col-12 col-sm-8 ">
            <h4 className="mt-5 w-100 text-center">no posts yet..</h4>
          </div>
          <div className="d-none d-sm-block col-sm-4 limh posts">
            {this.props.friendsData.map((item, index) => (
              <Link to={"/chat/" + item.username} className="text-white">
                <div
                  class="media mt-4 border border-white rounded p-3"
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
      );
    } else if (
      this.props.friendsData.length === 0 &&
      this.props.postsView.length !== 0
    ) {
      return (
        <div className="row">
          <div className="limh posts col-12 col-sm-8">
            {this.props.postsView.map((item, index) => (
              <div key={index}>
                <Card
                  className="bg-transparent border border-white mt-4 mb-2"
                  style={{ width: "100%" }}
                >
                  <CardBody>
                    <CardText>@{item.username}</CardText>
                  </CardBody>
                  {/* <div className="imager"> */}
                  <CardImg
                    variant="bottom"
                    src={item.url}
                    style={{ padding: "1.25rem" }}
                    className="img-responsive"
                  />
                  {/* </div> */}
                  <CardBody>
                    <CardText>Caption.</CardText>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
          <div className="limh posts col-12 col-sm-4 ">
            <h4 className="mt-5 w-100 text-center">no friends yet..</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="limh posts col-12 col-sm-8 ">
            <h4 className="mt-5 w-100 text-center">no posts yet..</h4>
          </div>
          <div className="limh posts col-12 col-sm-4 ">
            <h4 className="mt-5 w-100 text-center">no friends yet..</h4>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import { profile } from "./../../redux/actions/actionCreators";
import { Card, CardBody, CardText, CardImg } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profile.profile,
  };
};

const mapDispatchToProps = (dispatch) => ({
  profile: () => {
    dispatch(profile());
  },
});

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
    this.statusSet = this.statusSet.bind(this);
  }
  componentDidMount() {}
  statusSet(val) {
    this.setState({
      status: val,
    });
  }
  render() {
    if (this.state.status === 1) {
      return (
        <div>
          <div className="card-header text-center">
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item w-25 ">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(3);
                  }}
                >
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(4);
                  }}
                >
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body phgt">
            <div className="row">
              <div className="pcrd mx-auto">
                {this.props.postsView.map((item, index) => {
                  if (item.username === this.props.username) {
                    return (
                      <div key={index}>
                        <Card
                          className="bg-transparent border border-white mt-4 mb-2"
                          style={{ width: "100%" }}
                        >
                          <CardBody>
                            <CardText>@{item.username}</CardText>
                          </CardBody>

                          <CardImg
                            variant="bottom"
                            src={item.url}
                            style={{ padding: "1.25rem" }}
                            className="img-responsive"
                          />

                          <CardBody>
                            <CardText>Caption.</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.status === 2) {
      return (
        <div>
          <div className="card-header text-center">
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item w-25 ">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-25">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(3);
                  }}
                >
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(4);
                  }}
                >
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body phgt">
            <div className="row">
              <div className="w-100 mx-auto">
                {this.props.friendsData.length === 0 ? (
                  <div className="row pt-5">
                    <h2 className="w-100 text-center pt-5">
                      No friends yet...
                    </h2>
                  </div>
                ) : (
                  <div className="posts">
                    {this.props.friendsData.map((item, index) => (
                      <Link
                        to={"/chat/" + item.username}
                        className="text-white"
                      >
                        <div
                          class="media mt-5 border border-white rounded p-3"
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
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.status === 3) {
      return (
        <div>
          <div className="card-header text-center">
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item w-25 ">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-25">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(3);
                  }}
                >
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(4);
                  }}
                >
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body phgt">
            <div className="row">
              <div className="w-100 mx-auto">
                {this.props.pendingData.length === 0 ? (
                  <div className="row pt-5">
                    <h2 className="w-100 text-center pt-5">
                      No pending requests...
                    </h2>
                  </div>
                ) : (
                  <div className="posts">
                    {this.props.pending.map((item, index) => (
                      <Link
                        to={"/chat/" + item.username}
                        className="text-white"
                      >
                        <div
                          class="media mt-5 border border-white rounded p-3"
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
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card-header text-center">
            <ul className="nav nav-tabs card-header-tabs ">
              <li className="nav-item w-25 ">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-25">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(3);
                  }}
                >
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </button>
              </li>
              <li class="nav-item w-25">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(4);
                  }}
                >
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body ">
            <h3>Working on it...</h3>
          </div>
        </div>
      );
    }
  }
}

class Chat extends Component {
  componentDidMount() {
    this.props.profile();
  }
  render() {
    if (this.props.profileInfo === undefined) {
      return (
        <div className="container">
          <NavigationBar />
          <div className="pt-5 w-100 text-center">
            <div className="pt-5 w-100">Loading...</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <NavigationBar />
          <div className="pt-5 users posts">
            <div className="pt-1 w-100">
              <Card className="bg-transparent border border-white p-4 mt-4 mb-2">
                <div className="row">
                  <div className="offset-sm-4 col-sm-4 col-12">
                    <CardImg
                      variant="bottom"
                      src={this.props.profileInfo.profileImg}
                      className="w-100 rounded mx-auto"
                      style={{ padding: "1.25rem" }}
                    />
                  </div>
                </div>
                <CardBody>
                  <div className="row">
                    <div className="offset-sm-2 col-sm-5 col-12 mb-3">
                      <CardText className="lead">
                        username : @{this.props.profileInfo.username}
                      </CardText>
                      <CardText className="lead">
                        email : {this.props.profileInfo.email}
                      </CardText>
                      <CardText className="lead">
                        bio : {this.props.profileInfo.bio}
                      </CardText>
                    </div>
                    <div className="col-sm-3 col-12">
                      <Link
                        className="btn w-100 h-100 lead mt-2 bg-dark text-white pt-5 pb-5"
                        to="/me/edit"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </CardBody>
                <Comp
                  postsView={this.props.profileInfo.posts}
                  username={this.props.profileInfo.username}
                  friendsData={this.props.profileInfo.friends}
                  pendingData={this.props.profileInfo.pending}
                />
              </Card>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));

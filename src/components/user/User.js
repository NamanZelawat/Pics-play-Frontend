import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import {
  userProfile,
  requestSend,
  requestAccept,
} from "./../../redux/actions/actionCreators";
import { Card, CardBody, CardText, CardImg } from "reactstrap";
import { Button } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    userData: state.userData.userData,
    msg: state.message.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  userProfile: (username) => {
    dispatch(userProfile(username));
  },
  requestSend: (username) => {
    dispatch(requestSend(username));
  },
  requestAccept: (username) => {
    dispatch(requestAccept(username));
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
              <li className="nav-item w-50 ">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className="nav-link w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body phgt">
            <div className="row">
              <div className="pcrd mx-auto">
                {this.props.postsView === undefined ||
                this.props.postsView.length === 0 ? (
                  <div className="pt-5">Loading...</div>
                ) : (
                  <div>
                    {this.props.postsView.map((item, index) => {
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
                    })}
                  </div>
                )}
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
              <li className="nav-item w-50 ">
                <button
                  className="nav-link  w-100 h-100 bg-transparent text-white"
                  onClick={() => {
                    this.statusSet(1);
                  }}
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className="nav-link active w-100 h-100"
                  onClick={() => {
                    this.statusSet(2);
                  }}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
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
                        to={"/search/" + item.username}
                        className="text-white"
                      >
                        <div
                          class="media mt-3 border border-white rounded p-3"
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
    }
  }
}

class User extends Component {
  constructor(props) {
    super(props);
    this.requestHandler = this.requestHandler.bind(this);
  }
  componentDidMount() {
    this.props.userProfile(this.props.match.params.user);
  }
  requestHandler() {
    if (this.props.userData.status === "Accept") {
      this.props.requestAccept(this.props.match.params.user);
    } else if (this.props.userData.status === "Send request") {
      this.props.requestSend(this.props.match.params.user);
    } else {
    }
  }
  render() {
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
                    src={this.props.userData.profileImg}
                    className="w-100 rounded mx-auto"
                    style={{ padding: "1.25rem" }}
                  />
                </div>
              </div>
              <CardBody>
                <div className="row">
                  <div className="offset-sm-2 col-sm-5 col-12 mb-3">
                    <CardText className="lead">
                      username : @{this.props.userData.username}
                    </CardText>
                    <CardText className="lead">
                      email : {this.props.userData.email}
                    </CardText>
                    <CardText className="lead">
                      bio : {this.props.userData.bio}
                    </CardText>
                  </div>
                  <div className="col-sm-3 col-12">
                    <Button
                      type="submit"
                      className="btn w-100 h-100 mt-2 bg-dark"
                      onClick={() => {
                        this.requestHandler();
                      }}
                    >
                      {this.props.userData.status}
                    </Button>
                  </div>
                </div>
              </CardBody>
              <Comp
                postsView={this.props.userData.posts}
                friendsData={this.props.userData.friends}
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

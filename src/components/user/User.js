import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
              <div class="card-header text-center">
                <ul class="nav nav-tabs card-header-tabs ">
                  <li class="nav-item w-50 ">
                    <a class="nav-link active" href="#">
                      Posts
                    </a>
                  </li>
                  <li class="nav-item w-50">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body ">
                <h5 class="card-title">Working on it...</h5>
                <p class="card-text"></p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

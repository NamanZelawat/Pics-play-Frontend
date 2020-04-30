import React, { Component } from "react";
import Auth from "./auth/Auth";
import Chat from "./chat/Chat";
import Land from "./land/Land";
import Search from "./search/Search";
import Post from "./post/Post";
import Err from "./Err";
import Me from "./me/Me";
import Hang from "./hang/Hang";
import User from "./user/User";
import Verify from "./verify/Verify";
import Reset from "./reset/Reset";
import Profiler from "./profiler/Profiler";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, page } from "./../redux/actions/actionCreators";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {};

class Main extends Component {
  componentDidMount() {
    this.props.auth(false);
    this.props.page(0);
  }
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={() => <Land />} />
          <Route exact path="/error" component={Err} />
          <Route exact path="/auth" component={() => <Auth />} />
          <Route exact path="/chat" component={() => <Chat />} />
          <Route exact path="/chat/:user" component={() => <Hang />} />
          <Route exact path="/search" component={() => <Search />} />
          <Route exact path="/search/:user" component={() => <User />} />
          <Route exact path="/post" component={() => <Post />} />
          <Route exact path="/me" component={() => <Me />} />
          <Route exact path="/me/edit" component={() => <Profiler />} />
          <Route
            exact
            path="/verify/:otp"
            component={(props) => <Verify {...props} />}
          />
          <Route exact path="/reset/:token" component={() => <Reset />} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, { auth, page })(Main));

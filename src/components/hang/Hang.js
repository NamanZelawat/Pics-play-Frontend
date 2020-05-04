import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import { fetchChats, addChat } from "./../../redux/actions/actionCreators";
import { Control, LocalForm } from "react-redux-form";
import { Button } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    chatData: state.chat.chat,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchChats: (name) => {
    dispatch(fetchChats(name));
  },
  addChat: (name, message) => {
    dispatch(addChat(name, message));
  },
});

function Chats(props) {
  return (
    <div className="elemChat">
      {props.chatData.map((item, index) => {
        if (item.sender === props.user) {
          return (
            <div className="row " key={index}>
              <div className="mr-auto ml-3">
                <p className="msg mr-5 ">{item.message}</p>
              </div>
              <div className="col-4"></div>
            </div>
          );
        } else {
          return (
            <div className="row" key={index}>
              <div className="ml-auto mr-3">
                <p className="msg ml-5">{item.message}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

class Hang extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.props.fetchChats(this.props.match.params.user),
      60000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.props.fetchChats(this.props.match.params.user);
  }
  handleMessage(message) {
    this.props.addChat(this.props.match.params.user, message);
    this.props.fetchChats(this.props.match.params.user);
  }
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <div className="chats posts">
          {this.props.chatData.length === 0 ? (
            <h4>Loading...</h4>
          ) : (
            <Chats
              chatData={this.props.chatData}
              user={this.props.match.params.user}
            />
          )}
        </div>
        <div className="container fixed-bottom">
          <LocalForm
            onSubmit={(message) => this.handleMessage(message)}
            className="former pt-5 pb-3"
          >
            <div className="row ">
              <div className="col-10 col-sm-11 pr-0">
                <Control.text
                  model=".message"
                  name="message"
                  id="message"
                  placeholder="type your message here..."
                  className="bg-transparent text-white w-100 h-100"
                />
              </div>
              <div className=" col-2 col-sm-1 pl-0">
                <Button
                  type="submit"
                  className="btn w-100 bg-transparent rounded"
                >
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </Button>
              </div>
            </div>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hang));

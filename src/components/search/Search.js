import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./../NavigationBar";
import { Control, LocalForm } from "react-redux-form";
import { Button } from "reactstrap";
import { search } from "./../../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    searchData: state.search.search,
  };
};

const mapDispatchToProps = (dispatch) => ({
  search: (keyword) => {
    dispatch(search(keyword));
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(keyword) {
    this.props.search(keyword);
  }
  render() {
    return (
      <div className="container ">
        <NavigationBar />
        <div className="search pt-4">
          <LocalForm
            onSubmit={(keyword) => this.handleSearch(keyword)}
            className="former pt-5 pb-3"
          >
            <div className="row">
              <div className=" col-12">
                <Control.text
                  model=".keyword"
                  name="keyword"
                  id="keyword"
                  placeholder="type keywords and press enter"
                  className="bg-transparent text-white w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-12">
                <Button type="submit" className="btn w-100 mt-2 bg-transparent">
                  Search
                </Button>
              </div>
            </div>
          </LocalForm>
          {this.props.searchData.length === 0 ? (
            <div className="row ">
              <p className="w-100 text-center">No results found...</p>
            </div>
          ) : (
            <div className="posts search">
              {this.props.searchData.map((item, index) => (
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
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

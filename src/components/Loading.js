import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="row container fullh">
          <div className="col-12 text-center">
            <p className="cl6">Loading....</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;

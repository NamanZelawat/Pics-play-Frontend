import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg } from "reactstrap";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }
  verify(otp) {
    fetch(
      " https://cors-anywhere.herokuapp.com/https://api-pics-play.herokuapp.com/" +
        `otp?otp=${otp}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(
        (response) => {
          response.json().then((data) => {
            if (data.success === true) {
              this.setState({
                status: true,
              });
            } else {
              this.setState({
                status: false,
              });
            }
          });
        },
        (error) => {
          alert(error);
        }
      )
      .catch((error) => {
        alert(
          "otp cannot be virified try again later or create new account/nerror: " +
            error.message
        );
      });
  }
  componentDidMount() {
    this.verify(this.props.match.params.otp);
  }
  render() {
    if (this.state.status === null) {
      return (
        <div className="container fullh">
          <div className="row">
            <div className="pcrd mx-auto">
              <Card
                className="bg-transparent mt-4 mb-2"
                style={{ width: "100%" }}
              >
                <CardImg
                  variant="bottom"
                  src="https://user-images.githubusercontent.com/44704257/80727830-d44aa780-8b23-11ea-8c7d-934804c08d5d.png"
                  style={{ padding: "1.25rem" }}
                  className="img-responsive"
                />
                <CardBody className="w-100 h-100 text-center">
                  <h2>
                    <CardText>Loading...</CardText>
                  </h2>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.status === true) {
      return (
        <div className="container fullh">
          <div className="row">
            <div className="pcrd mx-auto">
              <Card
                className="bg-transparent mt-4 mb-2"
                style={{ width: "100%" }}
              >
                <CardImg
                  variant="bottom"
                  src="https://user-images.githubusercontent.com/44704257/80727830-d44aa780-8b23-11ea-8c7d-934804c08d5d.png"
                  style={{ padding: "1.25rem" }}
                  className="img-responsive"
                />
                <CardBody className="w-100 h-100 text-center">
                  <h2>
                    <CardText>Verified</CardText>
                  </h2>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container fullh">
          <div className="row">
            <div className="pcrd mx-auto">
              <Card
                className="bg-transparent mt-4 mb-2"
                style={{ width: "100%" }}
              >
                <CardImg
                  variant="bottom"
                  src="https://user-images.githubusercontent.com/44704257/80727830-d44aa780-8b23-11ea-8c7d-934804c08d5d.png"
                  style={{ padding: "1.25rem" }}
                  className="img-responsive"
                />
                <CardBody className="w-100 h-100 text-center">
                  <h2>
                    <CardText>Failed</CardText>
                  </h2>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Verify;

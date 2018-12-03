import React, { Component } from "react";
import moment from "moment";

class Header extends Component {
  state = {
    time: new Date(),
    moment: moment()
  };
  /*Functions*/
  newMoment = () => {
    this.setState({
      time: new Date()
    });
  };
  /*=================*/
  componentWillMount = () => {
    setInterval(() => this.newMoment(), 1000);
  };
  render() {
    return (
      <header className="bg-dark text-light pt-2 pb-2">
        <div className="container">
          <h1 className="mb-0 head-font-size col-lg-6 col-md-12 px-0 font-family-head d-inline-block">
            HBKarim
          </h1>
          <span className="d-inline-block font-family-normal col-lg-6 col-md-12 normal-font-size px-0">
            <div>
              {this.state.moment.format("YYYY / MM / DD")}
              <span> -- </span>
              {this.state.time.toLocaleTimeString()}
            </div>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;

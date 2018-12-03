import React, { Component } from "react";

class WeatherBoxs extends Component {
  render() {
    return (
      <div className="my-5">
        <hr />
        <ul className="row list-unstyled p-3 text-center text-light">
          <li className="col-lg-3 col-md-6 col-sm-12 p-2">
            <div className="w-100 bg-dark p-2 border-radius">
              <h6 className="font-family-head head-font-size">Location :</h6>
              <h1 className="font-family-normal head-font-size-high mb-0">
                {this.props.city} , {this.props.country}{" "}
                <i className="fa text-muted fa-location-arrow" />
              </h1>
            </div>
          </li>
          <li className="col-lg-3 col-md-6 col-sm-12 p-2">
            <div className="w-100 bg-dark p-2 border-radius">
              <h6 className="font-family-head head-font-size">Temperature :</h6>
              <h1 className="font-family-normal head-font-size-high mb-0">
                {this.props.temp}{" "}
                <i className="fa text-muted fa-thermometer-full" />
              </h1>
            </div>
          </li>
          <li className="col-lg-3 col-md-6 col-sm-12 p-2">
            <div className="w-100 bg-dark p-2 border-radius">
              <h6 className="font-family-head head-font-size">Humidity :</h6>
              <h1 className="font-family-normal head-font-size-high mb-0">
                {this.props.humidity} <i className="fa text-muted fa-tint" />
              </h1>
            </div>
          </li>
          <li className="col-lg-3 col-md-6 col-sm-12 p-2">
            <div className="w-100 bg-dark p-2 border-radius">
              <h6 className="font-family-head head-font-size">Description :</h6>
              <h1 className="font-family-normal head-font-size-high mb-0">
                {this.props.description}
              </h1>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default WeatherBoxs;

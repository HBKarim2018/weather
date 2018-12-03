import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1 className="text-dark font-family-head head-font-size-high">
              Weather
            </h1>
            <p className="font-family-normal normal-font-size">
              Weather forecasts for thousands of locations around the world
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <form
              onSubmit={this.props.get_weather}
              className="form-group row text-dark font-family-normal"
            >
              <div className="col-auto">
                <label className="sr-only">City</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-home" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                  />
                </div>
              </div>
              <div className="col-auto">
                <label className="sr-only">Country</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-compass" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                  />
                </div>
              </div>
              <div className="col-auto">
                <input
                  className="btn btn-dark text-light col-auto"
                  type="submit"
                  name="submit"
                  value="get a weather"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

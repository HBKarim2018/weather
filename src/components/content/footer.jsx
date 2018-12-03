import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="position-fixed pt-1 pb-1 bg-dark bottom-0 w-100">
        <div className="text-center text-light w-100">
          <span className="mb-0 normal-font-size letter-spacing font-family-normal">
            copyRight <span className="text-muted"> &copy; </span> HBKARIM |
            2018
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

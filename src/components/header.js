import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <h1 className="display-4" id="title">
            Bookster
          </h1>
          <h5 id="slogan">All books in one place.</h5>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

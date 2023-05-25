import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4">Bookster</h1>
        <h5>All books in one place.</h5>
      </React.Fragment>
    );
  }
}

export default Header;

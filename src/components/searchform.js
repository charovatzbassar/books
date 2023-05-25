import React, { Component } from "react";

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" placeholder="Enter book title"></input>
          <button className="searchBooks">Search!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;

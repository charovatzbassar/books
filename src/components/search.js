import React, { useState } from "react";
import BookSearch from "./booksearch";

const Search = () => {
  const terms = ["Title", "Author"];
  const [value, setValue] = useState("Title");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div id="searchTerm">
        <span>Search by: </span>
        <select value={value} onChange={handleChange}>
          {terms.map((term) => (
            <option value={term}>{term}</option>
          ))}
        </select>
      </div>
      <BookSearch term={value} />
    </React.Fragment>
  );
}

export default Search;

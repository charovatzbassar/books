import axios from "axios";
import React, { useState } from "react";

const BookSearch = (props) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const searchBooks = async (searchTerm) => {
    let response;
    try {
      if (searchTerm === "Title") {
        response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=API_KEY`
        );
      } else {
        response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&key=API_KEY`
        );
      }

      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div id="searchInput">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Enter " + props.term}
        />
        <button onClick={() => searchBooks(props.term)}>Search</button>
      </div>
      {books.map((book) => (
        <div className="bookInfo" key={book.id}>
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            alt="N/A"
          ></img>
          <h3>{book.volumeInfo.title}</h3>
          <p>
            {book.volumeInfo.authors.map((author) => (
              <span>{author} </span>
            ))}
            - {book.volumeInfo.publishedDate}
          </p>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BookSearch;

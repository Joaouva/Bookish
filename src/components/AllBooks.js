// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";

class GetBooksFromBd extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    booksFromdb.getAll().then((response) => {
      this.setState({
        books: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.books.map((book, index) => {
          return (
            <div key={index}>
              <Link to={`/ROUTEBOOKDETAILS/${book._id}`}>{book.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetBooksFromBd;

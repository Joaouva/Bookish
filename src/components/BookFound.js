// extrai a info da api pelo isbn

import React from "react";
import { Link, withRouter } from "react-router-dom";
import BooksService from "../utils/api";
import BooksFromDb from "../utils/bd";

class GetBooksFromApi extends React.Component {
  state = {
    book: [],
    price: "",
    grade: "",
  };

  componentDidMount() {
    const booksFromApi = new BooksService();
    booksFromApi
      .getBookByIsbn(this.props.match.params.isbn)
      .then((response) => {
        this.setState({
          book: response.data,
        });
      });
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const booksFromDb = new BooksFromDb();
    booksFromDb
      .addBook(this.props.match.params.isbn, this.state.price, this.state.grade)
      .then(() => {
        this.props.history.push(`/profile`);
      });
  };
  render() {
    return (
      <div>
        <h3> Is this the book? </h3>
        <div>
          <h1>{this.state.book.title}</h1>
          <h2>{this.state.book.author}</h2>
          <h3>{this.state.book.description}</h3>
          <h3>{this.state.book.publisher}</h3>
          <h3>{this.state.book.published}</h3>
          <h3>{this.state.book.language}</h3>
        </div>
        <div>
          <img src={this.state.book.image} />
        </div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Price</label>
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
            />
            <label>Grade:</label>
            <input
              type="text"
              name="grade"
              onChange={this.handleChange}
              value={this.state.grade}
            />
            <button> Add Book </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(GetBooksFromApi);

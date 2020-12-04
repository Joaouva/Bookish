import React from "react";
import BooksService from "../utils/api";
import { withRouter, NavLink } from "react-router-dom";

class AddBook extends React.Component {
  state = {
    isbn: "",
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const booksService = new BooksService();
    booksService.getBookByIsbn(this.state.isbn).then(() => {
      this.props.history.push(`/bookfound/${this.state.isbn}`);
    });
  };

  render() {
    return (
      <div>
        <h1> Add a new book: </h1>

        <label> ISBN: </label>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="isbn"
            onChange={this.handleChange}
            value={this.state.isbn}
          />
          <button> Find Book </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddBook);

// extrai a info da api pelo isbn

import React from "react";
import { Link, withRouter } from "react-router-dom";
import BooksService from "../utils/api";

class GetBooksFromApi extends React.Component {
  state = {
    book: [],
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

  render() {
    return (
      <div>
        <h3> Is this the book? </h3>
        {this.state.book.title}
        {this.state.book.title}
      </div>
    );
  }
}

export default withRouter(GetBooksFromApi);

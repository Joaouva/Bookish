//Edit book component can only change price and grade!

import React from 'react';
import BooksService from '../utils/api';
import { withRouter } from "react-router-dom";

class EditBook extends React.Component {
  state = {
    price: "",
    grade: "",
  };

  componentDidMount() {
    const bookId = this.props.match.params.isbn;
    const booksService = new BooksService();
    booksService.getProject(bookId).then((response) => {
      this.setState({
        price: response.data.price,
        grade: response.data.grade,
      });
    });
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
        />
        <label>Grade:</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.grade}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default withRouter(EditBook);
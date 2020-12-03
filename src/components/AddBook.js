import React from "react";
import BooksService from "../utils/api";
import { withRouter } from "react-router-dom";

class AddBook extends React.Component {
  state = {
    title: "",
    description: "",
    author: "",
    publisher: "",
    isbn: "",
    image: "",
    published: "",
    language: "",
    price: "",
    grade: "",
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
    booksService.addBook(this.state).then(() => {
      this.props.history.push("/books");
    });
  };

  render() {
    return (
      <div>
        <h1> Add a new book: </h1>

        <form onSubmit={this.handleFormSubmit}>
          <label> Title: </label>
          <input
            type="text"
            name="title"
            onChange={this.hangleChange}
            value={this.state.title}
          />

          <label> Description: </label>
          <input
            type="textarea"
            name="description"
            rows="4"
            cols="10"
            onChange={this.hangleChange}
            value={this.state.description}
          />

          <label> Author: </label>
          <input
            type="text"
            name="author"
            onChange={this.hangleChange}
            value={this.state.author}
          />

          <label> Publisher: </label>
          <input
            type="text"
            name="publisher"
            onChange={this.hangleChange}
            value={this.state.publisher}
          />

          <label> ISBN: </label>
          <input
            type="text"
            name="isbn"
            onChange={this.hangleChange}
            value={this.state.isbn}
          />

          <label> Image: </label>
          <input
            type="image"
            src={this.state.image}
            alt="Submit"
            width="48"
            height="48"
            onChange={this.hangleChange}
            value={this.state.image}
          />

          <label> Year of publishment: </label>
          <input
            type="text"
            name="published"
            onChange={this.hangleChange}
            value={this.state.published}
          />

          <label> Language: </label>
          <input
            type="text"
            name="language"
            onChange={this.hangleChange}
            value={this.state.language}
          />

          <label> Price: </label>
          <input
            type="text"
            name="price"
            onChange={this.hangleChange}
            value={this.state.price}
          />

          <label> Grade: </label>
          <input
            type="text"
            name="grade"
            onChange={this.hangleChange}
            value={this.state.grade}
          />

          <button> Add new book</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddBook);

// extrai a info da api pelo isbn

import React from "react";
import { Link, withRouter } from "react-router-dom";
import BooksService from "../utils/api";
import BooksFromDb from "../utils/bd";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class GetBooksFromApi extends React.Component {
  state = {
    book: [],
    price: "",
    isUsed: false,
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
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const booksFromDb = new BooksFromDb();
    //  const newBook = {title: this.state.book.title, }
    const {
      title,
      author,
      description,
      published,
      publisher,
      language,
      image,
      isbn,
    } = this.state.book;
    const { price, isUsed } = this.state;

    booksFromDb
      .addBook({
        title,
        author,
        description,
        published,
        publisher,
        language,
        image,
        isUsed,
        isbn,
        price,
      })
      .then(() => {
        this.props.history.push(`/profile/${this.props.loggedInUser._id}`);
      });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "3rem",
            backgroundColor: "gray",
            padding: "20px",
            width: "100vw",
            boxShadow: "5px 5px darkGray ",
          }}
        >
          {" "}
          <b> Is this the book?</b>
        </h2>

        <Card bg="secondary" text="white" style={{ width: "60vw" }}>
          <Card.Header
            style={{ fontSize: "2rem", marginTop: "2rem", fontWeight: "bold" }}
          >
            {this.state.book.title} <br />
            <img
              src={this.state.book.image}
              style={{
                marginTop: "2rem",
                objectFit: "fill !important",
                width: "50vw",
              }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Text
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{
                __html: this.state.book.description,
              }}
            ></Card.Text>
            <Card.Text>
              <ListGroup
                style={{
                  color: "black",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <ListGroupItem>{this.state.book.publisher}</ListGroupItem>
                <ListGroupItem>{this.state.book.isbn}</ListGroupItem>
              </ListGroup>
            </Card.Text>
            <form
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              onSubmit={this.handleFormSubmit}
            >
              <label>Price</label>
              <input
                type="text"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
              />
              <label>Used:</label>
              <input
                type="checkbox"
                name="isUsed"
                onChange={this.handleChange}
                value={this.state.isUsed}
              />
              <button onClick={this.handleFormSubmit}>Add Book</button>
            </form>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default withRouter(GetBooksFromApi);

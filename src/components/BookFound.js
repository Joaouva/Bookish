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
      <div>
        <h3> Is this the book? </h3>
        <div>
          <Card
            style={{
              height: "30rem",
              width: "20rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card.Img variant="top" src={this.state.book.image} />
            <Card.Body>
              <Card.Title>{this.state.book.title}</Card.Title>
              <Card.Text
                style={{ width: "30rem" }}
                dangerouslySetInnerHTML={{
                  __html: this.state.book.description,
                }}
              ></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{this.state.book.published}</ListGroupItem>
              <ListGroupItem>{this.state.book.publisher}</ListGroupItem>
              <ListGroupItem>
                <strong>ISBN</strong> {this.state.book.isbn}
              </ListGroupItem>
              <ListGroupItem>
                <form onSubmit={this.handleFormSubmit}>
                  <label>Price</label>
                  <input
                    type="text"
                    name="price"
                    onChange={this.handleChange}
                    value={this.state.price}
                  />
                  <hr />
                  <label>Used:</label>
                  <input
                    type="checkbox"
                    name="isUsed"
                    onChange={this.handleChange}
                    value={this.state.isUsed}
                  />
                  <button> Add Book </button>
                </form>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(GetBooksFromApi);

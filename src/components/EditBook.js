//Edit book component can only change price and grade!

import React from "react";
import BooksFromDb from "../utils/bd";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class EditBook extends React.Component {
  state = {
    price: "",
    isUsed: "",
    title: "",
    image: "",
    isbn: "",
  };

  componentDidMount() {
    const booksFromDb = new BooksFromDb();
    const id = this.props.match.params.id;
    booksFromDb.getBookById(id).then((response) => {
      this.setState({
        title: response.data.title,
        isbn: response.data.isbn,
        image: response.data.image,
        price: response.data.price,
        isUsed: response.data.isUsed,
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
    //  const newBook = {title: this.state.book.title, }
    const price = this.state.price;
    const id = this.props.match.params.id;

    booksFromDb.editBook(id, price).then((response) => {
      toast.success("Price updated!");
    });
  };

  handleBookDelete = (id) => {
    const booksFromDb = new BooksFromDb();
    booksFromDb.deleteBook(id).then(() => {
      toast.warning("Book Deleted");
      this.props.history.push("./");
    });
  };

  render() {
    return (
      <div>
        <h1> Edit your book</h1>
        <div className="edit-book-container">
          <div>
            <Card
              style={{
                width: "20rem",
                height: "33rem",
                maxHeight: "33rem",
                maxWidth: "22rem",
                boxShadow: "5px 5px #888888",
              }}
              className="allbooks"
            >
              <Card.Img
                variant="top"
                src={this.state.image}
                style={{ height: "32.2rem", maxHeight: "32.2rem" }}
              />
            </Card>
          </div>
          <div className="form-edit-book">
            <Form onSubmit={this.handleFormSubmit}>
              <h3> Edit price </h3>
              <Form.Group controlId="formBasicRange" className="edit-book-form">
                <Form.Control
                  type="range"
                  className="price-box"
                  type="number"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.price}
                ></Form.Control>
                <Button
                  onClick={this.handleFormSubmit}
                  variant="dark"
                  style={{ width: "18vw" }}
                >
                  Save
                </Button>
              </Form.Group>
            </Form>

            <Button
              style={{ width: "18vw" }}
              variant="danger"
              onClick={() => this.handleBookDelete(this.props.match.params.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditBook);

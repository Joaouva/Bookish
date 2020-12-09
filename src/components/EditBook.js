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
        <h1> Edit your book: </h1>
        <Card style={{ width: "19rem" }} className="edit-book">
          <Card.Img variant="top" src={this.state.image} />
          <Card.Body>
            <Card.Title> {this.state.title} </Card.Title>
            <Card.Text> Asked Price: {this.state.price}</Card.Text>
            <Form onSubmit={this.handleFormSubmit}>
              <input
                type="number"
                name="price"
                onChange={this.handleChange}
                value={this.state.price}
              />
              <button>Save</button>
              <button
                onClick={() =>
                  this.handleBookDelete(this.props.match.params.id)
                }
              >
                Delete
              </button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(EditBook);

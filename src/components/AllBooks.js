// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import BooksService from "../utils/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
class GetBooksFromBd extends React.Component {
  state = {
    books: [],
    search: "",
    filteredBooks: [],
  };

  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const booksService = new BooksService();
    booksFromdb.getAllBooks().then((response) => {
      console.log(response);
      this.setState({
        books: response.data,
        filteredBooks: response.data,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    let search = event.target.value;
    if (!search) {
      this.setState({
        filteredBooks: [...this.state.books],
      });
    } else {
      let visibleBooks = [...this.state.books].filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase());
      });
      this.setState({
        filteredBooks: visibleBooks,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <label></label>
          <input className="search-bar"
            placeholder="Search for your book"
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <Container>
          <CardGroup>
            <div className="books-wrapper">
              {this.state.filteredBooks.map((book, index) => {
                return (
                  <Card key={index} className="allbooks">
                    <Link to={`/books/${book.ISBN}`}>
                      {" "}
                      <Card.Img variant="top" src={book.image} style={{height:"21rem"}}/>
                    </Link>
                    {/* <Card.Body>
                      <Card.Title>{book.price}</Card.Title>
                    </Card.Body> */}
                  </Card>
                );
              })}
            </div>
          </CardGroup>
        </Container>
      </div>
    );
  }
}

export default GetBooksFromBd;

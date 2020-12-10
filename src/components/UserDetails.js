import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class UserDetails extends React.Component {
  state = {
    id: "",
    username: "",
    city: "",
    name: "",
    isCompany: false,
    books: [],
  };
  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const id = this.props.match.params.id;
    booksFromdb.getUser(id).then((response) => {
      console.log(response.data);
      this.setState({
        id: response.data._id,
        books: response.data.books,
        username: response.data.username,
        city: response.data.city,
        name: response.data.name,
        isCompany: response.data.isCompany,
      });
    });
  }

  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotron-bookdetails">
          <Container>
            <h1>Welcome to the bookshop {this.state.name}</h1>
            <h5>Located in: {this.state.city}</h5>
            <h5> Heres a list of the available books</h5>
          </Container>
        </Jumbotron>

        <Container>
          <CardDeck style={{ marginLeft: "3vw" }}>
            {this.state.books.map((book, index) => {
              return (
                <div key={index}>
                  <Card className="allbooks">
                    <Link to={`/books/${book.ISBN}`}>
                      <Card.Img
                        variant="top"
                        src={book.image}
                        style={{ height: "21rem" }}
                      ></Card.Img>
                    </Link>
                  </Card>
                  <div>
                    <button
                      bg="dark"
                      class="snipcart-add-item"
                      data-item-id={book.ISBN}
                      data-item-price={book.price}
                      data-item-url={`/books/${book.ISBN}`}
                      data-item-description={book.description}
                      data-item-image={book.image}
                      data-item-name={book.title}
                    >
                      Buy this book!
                    </button>
                  </div>
                </div>
              );
            })}
          </CardDeck>
        </Container>
      </div>
    );
  }
}
export default UserDetails;

import React from "react";
import { Link } from "react-router-dom";
import BooksFromDb from "../utils/bd";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

class AllBookShops extends React.Component {
  state = {
    booksshops: [],
  };

  componentDidMount() {
    const booksFromDb = new BooksFromDb();
    booksFromDb.getAllBookshops().then((response) => {
      this.setState({
        booksshops: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Get to know all of our Bookshops </h1>
        <CardDeck className="cards-from-allbookshops">
          {this.state.booksshops.map((booksshops, index) => {
            return (
              <div key={index}>
                <Card
                  style={{
                    width: "15rem",
                    height: "25rem",
                    objectFit: "cover",
                  }}
                  className="allbooks"
                >
                  <Card.Img
                    className="bookshop-img"
                    variant="top"
                    src="../../images/shelf.jpeg"
                    style={{ height: "10rem", width: "18vw" }}
                  />
                  <Card.Body>
                    <Card.Title>{booksshops.username}</Card.Title>
                    <Card.Text>{booksshops.about}</Card.Text>
                    <small className="text-muted">{booksshops.city}</small>
                  </Card.Body>
                </Card>
                <Link to={`/allbookshops/${booksshops._id}`}>
                  <Button variant="dark" style={{ marginTop: "4px" }}>
                    View Book Shop
                  </Button>
                </Link>
              </div>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}

export default AllBookShops;

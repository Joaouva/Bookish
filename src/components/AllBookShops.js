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
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="../../images/shelf.jpeg"
                    
                  />
                  <Card.Body style={{ backgroundColor: "rgb(70, 69, 69)" }}>
                    <Card.Title>
                      <h4 style={{ color: "white" }}>{booksshops.name}</h4>
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>
                      {booksshops.about}
                    </Card.Text>
                    <small className="text-muted">
                      <strong style={{ color: "white" }}>
                        {booksshops.city}
                      </strong>
                    </small>
                  </Card.Body>
                </Card>
                <Link to={`/allbookshops/${booksshops._id}`}>
                  <Button variant="dark" style={{ marginBottom:"40px", marginTop:"3px" }}>
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

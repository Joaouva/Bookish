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
        {this.state.booksshops.map((booksshops, index) => {
          return (
				<div key={index}>
					<CardDeck>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>{booksshops.username}</Card.Title>
								<Card.Text>{booksshops.about}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Link to={`/allbookshops/${booksshops._id}`}>
									<Button variant="primary">
										View Book Shop
									</Button>
								</Link>
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</Card.Footer>
						</Card>
					</CardDeck>
				</div>
			);
        })}
            </div>
          );
        }
}


export default AllBookShops;





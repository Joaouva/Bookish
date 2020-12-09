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
			<CardDeck>
				{this.state.booksshops.map((booksshops, index) => {
					return (
						<div key={index}>
							<Card style={{ width: "10rem" }}>
								<Card.Img
									variant="top"
									src="https://lh3.googleusercontent.com/proxy/1gKpVxdnofWhFwEREJFmaGsnOPYXSeZgSFxFc0EphEqNyY8ZXGJvVv4GhJKRahezm1mV6TqvwJlos8XJA1OApywabqcN38_epZMX8YDpZZxIpcMl99is1CA3T4g"
									style={{ height: "10rem" }}
								/>
								<Card.Body>
									<Card.Title style={{ height: "3rem" }}>
										{booksshops.username}
									</Card.Title>
									<Card.Text>{booksshops.about}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">
										{booksshops.city}
									</small>
								</Card.Footer>
								<Link to={`/allbookshops/${booksshops._id}`}>
									<Button variant="primary">
										View Book Shop
									</Button>
								</Link>
							</Card>
						</div>
					);
				})}
			</CardDeck>
		</div>
	);
        }
}


export default AllBookShops;





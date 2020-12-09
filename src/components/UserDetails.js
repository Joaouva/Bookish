import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";

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
			<h1> Welcome to Library: {this.state.name} ! </h1>
			<h4>We are located in: {this.state.city}</h4>
			<h4> Heres a list of our available books</h4>

			<Container>
				<CardDeck>
					{this.state.books.map((book, index) => {
						return (
							<div key={index}>
								<Card style={{ width: "20rem" }}>
									<Card.Img
										variant="top"
										src={book.image}
										style={{ height: "30rem" }}
									></Card.Img>
									<Card.Body>
										<Card.Title style={{ height: "5rem" }}>
											{book.title} <br></br>
											<Button variant="danger">
												€{book.price}.00
											</Button>{" "}
										</Card.Title>
									</Card.Body>
									<Card.Footer>
										<Link to={`/books/${book.ISBN}`}>
											<Button variant="primary">
												View Book
											</Button>
										</Link>
									</Card.Footer>
								</Card>
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

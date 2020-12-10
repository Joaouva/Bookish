import React from "react";
import BooksService from "../utils/api";
import { withRouter, NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BooksFromBd from "../utils/bd";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class AddBook extends React.Component {
	state = {
    isbn: "",
    books: []
	};

	componentDidMount() {
		const booksFromdb = new BooksFromBd();
		booksFromdb.getAllBooks().then((response) => {
			console.log(response);
			this.setState({
				books: response.data,
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
		const booksService = new BooksService();
		booksService.getBookByIsbn(this.state.isbn).then(() => {
			this.props.history.push(`/bookfound/${this.state.isbn}`);
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input
						className="addbook-form"
						type="text"
						name="isbn"
						onChange={this.handleChange}
						value={this.state.isbn}
						placeholder="Find a book by ISBN"
					/>
					<br></br>
					<Button
						onClick={this.handleFormSubmit}
						className="search-button-addbook"
						variant="danger"
					>
						{" "}
						Search{" "}
					</Button>
				</form>
				<Container className="container-addbook">
					<h2>Latest in Bookish</h2>
					<CardGroup>
						<div className="books-wrapper">
							{this.state.books
								.slice(
									this.state.books.length - 4,
									this.state.books.length
								)
								.map((book, index) => {
									return (
										<Card className="allbooks">
											<Link to={`/books/${book.ISBN}`}>
												{" "}
												<Card.Img
													variant="top"
													src={book.image}
													style={{ height: "21rem" }}
												/>
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

export default withRouter(AddBook);

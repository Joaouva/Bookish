// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import BooksService from "../utils/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";
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
				<label>Search For Books:</label>
				<input
					type="text"
					name="search"
					onChange={this.handleChange}
					value={this.state.search}
				/>
			</div>
			<Container>
          <CardDeck>
					{this.state.filteredBooks.map((book, index) => {
						return (
							<div key={index}>
								<Card style={{ width: "20rem" }}>
									<Card.Img
										variant="top"
										src={book.image}
										style={{ height: "30rem" }}
									>
									</Card.Img>
									<Card.Body>
										<Card.Title style={{ height: "5rem" }}>
											<h3>{book.title}</h3>
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

export default GetBooksFromBd;



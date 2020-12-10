import React from "react";
import BooksService from "../utils/api";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup"
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class BookDetails extends React.Component {
  state = {
    title: "",
    author: "",
    publisher: "",
    published: "",
    isbn: "",
    language: "",
    image: "",
    description: "",
    price: "",
    isUsed: "",
  };
  componentDidMount() {
    const booksService = new BooksService();
    const isbn = this.props.match.params.isbn;
    booksService.getBookByIsbn(isbn).then((response) => {
      this.setState({
        title: response.data.title,
        author: response.data.author,
        publisher: response.data.publisher,
        published: response.data.published,
        isbn: response.data.isbn,
        language: response.data.language,
        image: response.data.image,
        description: response.data.description,
      });
      booksService.getBookDetails(isbn).then((response) => {
        const book = response.data[0];
        this.setState({
          price: book.price,
          isUsed: book.isUsed,
        });
      });
    });
  }

  render() {
    return this.state.price ? (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					marginBottom: "3rem",
					backgroundColor: "gray",
					padding: "20px",
					width: "100vw",
					boxShadow: "5px 5px darkGray ",
				}}
			>
				{this.state.title}
			</h1>
			<h3
				style={{
					marginBottom: "3rem",
					backgroundColor: "gray",
					padding: "20px",
					width: "30vw",
					boxShadow: "5px 5px darkGray ",
				}}
			>
				{this.state.author}
			</h3>

			<Card bg="secondary" text="white" style={{ width: "60vw" }}>
				<Card.Header
					style={{
						fontSize: "2rem",
						marginTop: "1rem",
						fontWeight: "bold",
					}}
				>
					<img
						src={this.state.image}
						style={{
							marginTop: "2rem",
							objectFit: "fill !important",
							width: "40vw",
						}}
					/>
				</Card.Header>
				<Card.Body>
					<Card.Text
						style={{ textAlign: "justify" }}
						dangerouslySetInnerHTML={{
							__html: this.state.description,
						}}
					></Card.Text>
					<Card.Text>
						<ListGroup
							style={{
								color: "black",
								marginTop: "10px",
								marginBottom: "30px",
							}}
						>
							<ListGroupItem>
								{this.state.publisher}
							</ListGroupItem>
							<ListGroupItem>{this.state.isbn}</ListGroupItem>
						</ListGroup>
					</Card.Text>
					<button
						class="snipcart-add-item"
						data-item-id={this.state.isbn}
						data-item-price={this.state.price}
						data-item-url={`/books/${this.state.isbn}`}
						data-item-description={this.state.description}
						data-item-image={this.state.image}
						data-item-name={this.state.title}
						style={{ marginTop: "3%" }}
					>
						<a>Buy this book!</a>
					</button>
				</Card.Body>
			</Card>
			<br />
		</div>
	) : (
		//   <div>
		// 	<Jumbotron fluid className="jumbotron-bookdetails">

		// 	</Jumbotron>
		// 	<div className="bookdetails-container">
		// 		<div className="bookdetails-image">
		// 			<img
		// 				src={this.state.image}
		// 				className="bookdetails-image"
		// 			></img>
		// 			{/* <CardGroup>
		// 				<Card>
		// 					<Card.Img variant="top" src={this.state.image} />
		// 				</Card>
		// 			</CardGroup> */}
		// 		</div>
		// 		<div>
		// 			<Card
		// 				className="text-center"
		// 				className="bookdetails-description"
		// 			>
		// 				<Card.Header>ISBN Code {this.state.isbn}</Card.Header>
		// 				<Card.Body>
		// 					<Card.Title>Description</Card.Title>
		// 					<Card.Text
		// 						dangerouslySetInnerHTML={{
		// 							__html: this.state.description,
		// 						}}
		// 					></Card.Text>
		// <button
		// 	class="snipcart-add-item"
		// 	data-item-id={this.state.isbn}
		// 	data-item-price={this.state.price}
		// 	data-item-url={`/books/${this.state.isbn}`}
		// 	data-item-description={this.state.description}
		// 	data-item-image={this.state.image}
		// 	data-item-name={this.state.title}
		// 	style={{ marginTop: "30%" }}
		// >
		// 	Buy this book!
		// </button>
		// 				</Card.Body>
		// 				<Card.Footer className="text-muted">
		// 					Book State: {this.state.isUsed ? "Used" : "New"}{" "}
		// 				</Card.Footer>
		// 			</Card>
		// 		</div>
		// 	</div>
		// </div>
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
  }
}

export default withRouter(BookDetails);



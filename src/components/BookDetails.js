import React from "react";
import BooksService from "../utils/api";
import { withRouter } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "1rem",
					backgroundColor: "rgb(234,236,239)",
					padding: "20px",
					width: "100vw",
					height: "13rem",
					boxShadow: "5px 5px darkGray ",
					justifyContent: "center",
				}}
			>
				<h1>{this.state.title}</h1>
				<h5
					style={{
						marginBottom: "2rem",
						padding: "10px",
						width: "30vw",
					}}
				>
					From {this.state.author}
				</h5>
			</div>

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
						alt="book-cover"
						style={{
							marginTop: "2rem",
							objectFit: "fill !important",
							width: "30vw",
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
								marginBottom: "20px",
							}}
						>
							<footer>Published by {this.state.publisher}</footer>
							<Card.Footer className="text-muted">
								<p style={{ color: "white" }}> ISBN {this.state.isbn}
								</p>
							</Card.Footer>
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
					>
						<p>Add to Cart<br></br>{this.state.price}€</p>
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



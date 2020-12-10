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
		<div>
			<Jumbotron fluid className="jumbotron-bookdetails">
				<Container>
					<h1>{this.state.title}</h1>
					<h3>{this.state.author}</h3>
				</Container>
			</Jumbotron>
			<Container className="bookdetails-container">
				<Card style={{ width: "100%" }} className="bookdetails-card">
					<Card.Body>
						<Card.Text>
							<Row>
								<Col>
									<Card.Img
										variant="top"
										src={this.state.image}
										style={{
											width: "20rem",
											height: "30rem",
										}}
									/>
								</Col>
								<Col>
									<Card
										style={{ width: "100%" }}
										className="bookdetails-card"
									>
										<Card.Body>
											<Card.Subtitle className="mb-2 text-muted">
												Book State:{" "}
												{this.state.isUsed
													? "Used"
													: "New"}{" "}
											</Card.Subtitle>
											<Card.Text>
												<h6
													className="book-description"
													dangerouslySetInnerHTML={{
														__html: this.state
															.description,
													}}
												/>
											</Card.Text>
											<Card.Subtitle className="mb-2 text-muted">
												ISBN Code {this.state.isbn}
											</Card.Subtitle>
											<Card.Subtitle className="mb-2 text-muted">
												<p>
													Language:{" "}
													{this.state.language}
												</p>
											</Card.Subtitle>
											<button
												class="snipcart-add-item"
												data-item-id={this.state.isbn}
												data-item-price={
													this.state.price
												}
												data-item-url={`/books/${this.state.isbn}`}
												data-item-description={
													this.state.description
												}
												data-item-image={
													this.state.image
												}
												data-item-name={
													this.state.title
												}
											>
												Buy this book!
											</button>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</div>
	) : (
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
  }
}

export default withRouter(BookDetails);

/*
<div>
        <div className="book-container">
          <h2>{this.state.title}</h2>
          <h3>{this.state.author}</h3>
          <h4>{this.state.publisher}</h4>
          <h4>{this.state.published}</h4>
          <h4>{this.state.isbn}</h4>
          <h4>{this.state.language}</h4>
          <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
          <h3>{this.state.price}</h3>
          <h3>{this.state.isUsed ? "usado" : "novo"}</h3>
        </div>
        <div>
          <img className="bookImage" src={this.state.image} alt="bookcover" />
        </div>
       
        <div>
          <button
            class="snipcart-add-item"
            data-item-id={this.state.isbn}
            data-item-price={this.state.price}
            data-item-url="/paintings/starry-night"
            data-item-description={this.state.description}
            data-item-image={this.state.image}
            data-item-name={this.state.title}
          >
            Add to cart
          </button>
        </div>
      </div>

      */

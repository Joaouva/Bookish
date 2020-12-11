// extrai a info da api pelo isbn

import React from "react";
import { withRouter } from "react-router-dom";
import BooksService from "../utils/api";
import BooksFromDb from "../utils/bd";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class GetBooksFromApi extends React.Component {
  state = {
    book: [],
    price: "",
    isUsed: false,
  };

  componentDidMount() {
    const booksFromApi = new BooksService();
    booksFromApi
      .getBookByIsbn(this.props.match.params.isbn)
      .then((response) => {
        this.setState({
          book: response.data,
        });
      });
  }

  handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const booksFromDb = new BooksFromDb();
    //  const newBook = {title: this.state.book.title, }
    const {
      title,
      author,
      description,
      published,
      publisher,
      language,
      image,
      isbn,
    } = this.state.book;
    const { price, isUsed } = this.state;

    booksFromDb
      .addBook({
        title,
        author,
        description,
        published,
        publisher,
        language,
        image,
        isUsed,
        isbn,
        price,
      })
      .then(() => {
        this.props.history.push(`/profile/${this.props.loggedInUser._id}`);
        toast("Book Added!", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
      })
  };
  render() {
    return (
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
					backgroundColor: "rgb(234,236,239)",
					padding: "20px",
          width: "100vw",
          height: "10rem",
          boxShadow: "5px 5px darkGray ",
				}}
			>
				{" "}
				<b> Is this the book?</b>
			</h1>

			<Card bg="secondary" text="white" style={{ width: "60vw" }}>
				<Card.Header
					style={{
						fontSize: "2rem",
						marginTop: "2rem",
						fontWeight: "bold",
					}}
				>
					{this.state.book.title} <br />
					<img
						src={this.state.book.image}
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
							__html: this.state.book.description,
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
							<footer>
								Published by {this.state.book.publisher}
							</footer>
							<Card.Footer className="text-muted">
								<p style={{ color: "white" }}>
									ISBN {this.state.book.isbn}
								</p>
							</Card.Footer>
						</ListGroup>
					</Card.Text>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
						}}
						onSubmit={this.handleFormSubmit}
					>
						<Form.Group controlId="formBasicRange">
							<Form.Label>Price €</Form.Label>
							<Form.Check
								type="range"
								// eslint-disable-next-line react/jsx-no-duplicate-props
								type="number"
								name="price"
								onChange={this.handleChange}
                value={this.state.price}
                required
							/>
						</Form.Group>
						<Form.Group id="formGridCheckbox">
							<Form.Check
								type="checkbox"
								name="isUsed"
								label="Used"
								onChange={this.handleChange}
								value={this.state.isUsed}
							/>
						</Form.Group>
						<Button
							onClick={this.handleFormSubmit}
							variant="dark"
							style={{
								width: "30%",
								margin: "0 auto",
								display: "block",
							}}
						>
							Add Book
						</Button>
					</form>
				</Card.Body>
			</Card>
			<br />
		</div>
	);
  }
}

export default withRouter(GetBooksFromApi);

import React from "react";
import BooksFromBd from "../utils/bd";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/image";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

// welcome - nome
//about me
//library - proprios livros para vender

class Profile extends React.Component {
	state = {
		id: "",
		username: "",
		city: "",
		name: "",
		isCompany: false,
		books: [],
		about: "",
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
				about: response.data.about,
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
		const booksFromDb = new BooksFromBd();
		//  const newBook = {title: this.state.book.title, }

		booksFromDb.updateUser(this.state).then((response) => {
			toast.success("Profile updated!");
		});
	};

	render() {
		return (
			<div>
				<div>
					<h1>Welcome to your profile {this.state.username}</h1>
					<Container>
						<Row>
							<Col xs={6} md={4}>
								<Image
									src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
									width="200"
									roundedCircle
								/>
							</Col>
						</Row>
						<div>
							<Form>
								<Form.Group controlId="exampleForm.ControlInput1">
									<Form.Label>Username</Form.Label>
									<Form.Control
										type="email"
										name="username"
										onChange={this.handleChange}
										placeholder={this.state.username}
									/>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="email"
										name="email"
										onChange={this.handleChange}
										placeholder={this.state.name}
									/>
									<Form.Label>City</Form.Label>
									<Form.Control
										type="email"
										name="city"
										onChange={this.handleChange}
										placeholder={this.state.city}
									/>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>About</Form.Label>
									<Form.Control
										as="textarea"
										name="about"
										onChange={this.handleChange}
										rows={3}
										placeholder={this.state.about}
									/>
								</Form.Group>
								<Button onClick={this.handleFormSubmit}>
									Submit
								</Button>
							</Form>
						</div>
					</Container>
					<div>
						<h2>Your books:</h2>
						<Container>
							<CardGroup>
								<div className="books-wrapper">
									{this.state.books.map((book, index) => {
										return (
											<Card>
												<Card.Img
													variant="top"
													src={book.image}
												/>
												<Card.Body>
													<Card.Title>
														{book.title}
													</Card.Title>
													<Card.Text>
														Asking price:{" "}
														{book.price}
													</Card.Text>
												</Card.Body>
												<Card.Footer>
													<Link
														to={`/editbook/${book._id}`}
													>
														<Button variant="primary">
															Edit Book
														</Button>
													</Link>
												</Card.Footer>
											</Card>
										);
									})}
								</div>
							</CardGroup>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;

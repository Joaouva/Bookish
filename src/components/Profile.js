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
				<div className="div-profile-top">
					<Container
						className="container-profile-top"
						style={{ width: "20rem" }}
					>
						<Row className="profile-image">
							<Col xs={6} md={4}>
								<Image
									src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
									width="250"
									roundedCircle
								/>
							</Col>
						</Row>
						<div className="form-container">
							<h2 style={{marginBottom: "40px"}}>
								Welcome to your profile
							</h2>
							<Form>
								<Form.Group controlId="exampleForm.ControlInput1">
									<Form.Label>
										<b> Username </b>
									</Form.Label>
									<Form.Control
										className="form-profile"
										type="text"
										name="username"
										onChange={this.handleChange}
										value={this.state.username}
									/>
									<Form.Label>
										<b>Name</b>
									</Form.Label>
									<Form.Control
										className="form-profile"
										type="email"
										name="email"
										onChange={this.handleChange}
										value={this.state.name}
									/>
									<Form.Label>
										<b>City</b>
									</Form.Label>
									<Form.Control
										className="form-profile"
										type="email"
										name="city"
										value={this.state.city}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>
										<b>About</b>
									</Form.Label>
									<Form.Control
										className="form-profile"
										as="textarea"
										name="about"
										onChange={this.handleChange}
										rows={3}
										value={this.state.about}
									/>
								</Form.Group>
								<Button
									variant="light"
									onClick={this.handleFormSubmit}
								>
									Submit
								</Button>
							</Form>
						</div>
					</Container>
				</div>
				<div>
					<h2 style={{ marginTop: "50px" }}>
						{" "}
						You're currently selling these books
					</h2>
					<Container>
						<CardGroup>
							<div className="books-wrapper">
								{this.state.books.map((book, index) => {
									return (
										<Card className="allbooks">
											<Card.Img
												variant="top"
												src={book.image}
												style={{ height: "21rem" }}
											/>
											<Card.Body>
												<Card.Title>
													<Link
														to={`/editbook/${book._id}`}
													>
														<Button variant="dark">
															Edit Book
														</Button>
													</Link>
												</Card.Title>
												<Card.Text>
													€{book.price}.00
												</Card.Text>
											</Card.Body>
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

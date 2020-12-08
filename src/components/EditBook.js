//Edit book component can only change price and grade!

import React from 'react';
import BooksFromDb from "../utils/bd";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class EditBook extends React.Component {
	state = {
		price: "",
		isUsed: "",
		title: "",
		image: "",
		isbn: "",
	};

	componentDidMount() {
		const booksFromDb = new BooksFromDb();
		const id = this.props.match.params.id;
		booksFromDb.getBookById(id).then((response) => {
			this.setState({
				title: response.data.title,
				isbn: response.data.isbn,
				image: response.data.image,
				price: response.data.price,
				isUsed: response.data.isUsed,
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
		const booksFromDb = new BooksFromDb();
		//  const newBook = {title: this.state.book.title, }
		const price = this.state.price;
		const id = this.props.match.params.id;

		booksFromDb.editBook(id, price).then((response) => {
			toast.success("Price updated!");
		});

	};


	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<h3>Asking price: {this.state.price}</h3>
				<h2>{this.state.isbn}</h2>
				<img src={this.state.image}></img>
				<form onSubmit={this.handleFormSubmit}>
					<label>Price:</label>
					<input
						type="number"
						name="price"
						onChange={this.handleChange}
						value={this.state.price}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default withRouter(EditBook);
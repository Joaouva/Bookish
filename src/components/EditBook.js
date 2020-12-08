//Edit book component can only change price and grade!

import React from 'react';
import BooksFromDb from "../utils/bd";
import { withRouter } from "react-router-dom";
import BooksService from "../utils/api";

class EditBook extends React.Component {
	state = {
		id: "",
		price: "",
		isUsed: "",
		title: "",
    image: "",
    isbn: ""
	};

	componentDidMount() {
		const booksService = new BooksService();
		const isbn = this.props.match.params.isbn;
		debugger;
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
    const { price } = this.state;

		booksFromDb
			.editBook({
				price
			})
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
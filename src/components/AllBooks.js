// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import BooksService from "../utils/api"

class GetBooksFromBd extends React.Component {
	state = {
		books: [],
	};

	componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const booksService = new BooksService();
		booksFromdb.getAllBooks().then((response) => {
			console.log(response);
			this.setState({
				books: response.data,
			});
    });
	}


	render() {
		return (
			<div>
				{this.state.books.map((book, index) => {
					return (
						<div key={index}>
							<Link to={`/books/${book.ISBN}`}>
								<img src={book.image_url}></img>
								<h1>{book.title}</h1>
								<p>{book.ISBN}</p>
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}

export default GetBooksFromBd;

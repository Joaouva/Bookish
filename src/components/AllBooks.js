// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import BooksService from "../utils/api"

class GetBooksFromBd extends React.Component {
  state = {
    books: [],
    title: '',
    author: '',
    image: '',
    price: ''
  };

  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const booksService = new BooksService();
    booksFromdb.getAllBooks().then((response) => {
      this.setState({
        books: response.data,
      });
    });
    booksService.getBookByIsbn(this.state.books.ISBN).then((response) => {
      this.setState({
        title: response.data.title,
        author: response.data.author,
        image: response.data.image,
        price: response.data.price,
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
                <img src={this.state.image}></img>
                <h1>{this.state.title}</h1>
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

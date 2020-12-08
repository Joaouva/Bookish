// display de todos os livros independetemente das livrarias
import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";
import BooksService from "../utils/api";

class GetBooksFromBd extends React.Component {
  state = {
    books: [],
    search: "",
    filteredBooks: [],
  };

  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const booksService = new BooksService();
    booksFromdb.getAllBooks().then((response) => {
      console.log(response);
      this.setState({
        books: response.data,
        filteredBooks: response.data,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    let search = event.target.value;
    if (!search) {
      this.setState({
        filteredBooks: [...this.state.books],
      });
    } else {
      let visibleBooks = [...this.state.books].filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase());
      });
      this.setState({
        filteredBooks: visibleBooks,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <label>Search For Books:</label>
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <div>
          {this.state.filteredBooks.map((book, index) => {
            return (
              <div key={index}>
                <Link to={`/books/${book.ISBN}`}>
                  <img src={book.image}></img>
                  <h1>{book.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GetBooksFromBd;

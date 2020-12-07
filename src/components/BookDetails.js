import React from "react";
import BooksService from "../utils/api";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

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
    grade: "",
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
        price: response.data.price,
        grade: response.data.grade,
      });
    });
  }
  handleBookDelete = (isbn) => {
    const booksService = new BooksService();
    booksService.deleteBook(isbn).then(() => {
      toast.warning("Book Deleted");
      this.props.history.push("./");
    });
  };

  render() {
    return (
      <div>
        <div className="book-container">
          <h2>{this.state.title}</h2>
          <h3>{this.state.author}</h3>
          <h4>{this.state.publisher}</h4>
          <h4>{this.state.published}</h4>
          <h4>{this.state.isbn}</h4>
          <h4>{this.state.language}</h4>
          <h4>{this.state.description}</h4>
          <h3>{this.state.price}</h3>
          <h3>{this.state.grade}</h3>
        </div>
        <div>
          <img className="bookImage" src={this.state.image} alt="bookcover" />
        </div>
        <div>
          <button onClick={() => this.handleProjectDelete(this.state.isbn)}>
            Delete
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.props.history.push(`/books/${this.state.isbn}/edit`);
            }}
          >
            Edit Project
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(BookDetails);

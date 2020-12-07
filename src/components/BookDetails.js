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
    isUsed: "",
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
  handleBookDelete = (isbn) => {
    const booksService = new BooksService();
    booksService.deleteBook(isbn).then(() => {
      toast.warning("Book Deleted");
      this.props.history.push("./");
    });
  };

  render() {
    return this.state.price ? (
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
    ) : (
      <div>Loading</div>
    );
  }
}

export default withRouter(BookDetails);

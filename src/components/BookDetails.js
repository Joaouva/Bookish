import React from "react";
import BooksService from "../utils/api";
import withRouter from "react-router-dom";
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
        toast.warning('Book Deleted');
        this.props.history.push('./')
      })
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(BookDetails);

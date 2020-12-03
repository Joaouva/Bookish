import axios from "axios";

class BooksService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_BOOKS_API}/api`,
    });
    this.service = service;
  }

  getBookByIsbn(isbn) {
    return this.service.get(`/books/${isbn}`);
  }

  addBook(book) {
    return this.service.post("/books", book);
  }

  deleteBook(isbn) {
    return this.service.delete(`/books/${isbn}`);
  }

  editBook(updatedBook) {
    return this.service.put(`/books/${updatedBook.isbn}`, updatedBook);
  }
}

export default BooksService;

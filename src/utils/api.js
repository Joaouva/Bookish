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

<<<<<<< HEAD
  editBook(updateBook) {
    return this.service.put(`/books/${updateBook.isbn}`, updateBook);
=======
  editBook(updatedBook) {
    return this.service.put(`/books/${updatedBook.isbn}`, updatedBook);
>>>>>>> bb69e07be5ebb0817dbb6dd5628da446dcb8676b
  }
}

export default BooksService;

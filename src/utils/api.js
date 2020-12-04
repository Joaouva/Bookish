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
  editBook(updatedBook) {
    return this.service.put(`/books/${updatedBook.isbn}`, updatedBook);
=======
  editBook(updateBook) {
    return this.service.put(`/books/${updateBook.isbn}`, updateBook);
>>>>>>> 39fa2c95e6cbf1b40e872b37555c64a2fd643379
  }
}

export default BooksService;

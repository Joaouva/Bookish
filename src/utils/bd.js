import axios from "axios";

class BooksFromDb {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_BOOKS_API}/api`,
    });
    this.service = service;
  }

  getBookByIsbn(isbn) {
    return this.service.get(`/books/${isbn}`);
  }

  getAllBooks() {
    return this.service.get(`/books/db/allbooks`);
  }

  getAllBookshops() {
    return this.service.get(`/books/db/allbookshops`);
  }
}
export default BooksFromDb;

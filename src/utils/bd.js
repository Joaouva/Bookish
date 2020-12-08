import axios from "axios";

class BooksFromDb {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_BOOKS_API}/api`,
			withCredentials: true,
		});
		this.service = service;
	}

	getBookByIsbn(isbn) {
		return this.service.get(`/books/${isbn}`);
	}

	getUser(id) {
		return this.service.get(`/books/db/allbookshops/${id}`);
	}

	addBook(newBook) {
		return this.service.post("/books/associate", { ...newBook });
	}

	getAllBooks() {
		return this.service.get(`/books/db/allbooks`);
	}

	getAllBookshops() {
		return this.service.get(`/books/db/allbookshops`);
	}

	//UVA CHANGES

	editBook(id, price) {
		return this.service.put(`/books/editbook/${id}`, {price});
	}

	getBookById(id) {
		return this.service.get(`/books/editbook/${id}`);
	}

	deleteBook(id) {
		return this.service.delete(`/book/delete/${id}`);
	  }
	
}
export default BooksFromDb;

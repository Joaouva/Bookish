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

	editBook(updateBook) {
    return this.service.put(`/books/${updateBook.ISBN}`, { ...updateBook });
	}
}
export default BooksFromDb;

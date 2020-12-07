import React from "react";
import { Link } from "react-router-dom";
import BooksFromDb from "../utils/bd";

class GetBookShopsFromDb extends React.Component {
  state = {
    booksshops: [],
  };

  componentDidMount() {
    const booksFromDb = new BooksFromDb();
    booksFromDb.getAllBookshops().then((response) => {
      this.setState({
        booksshops: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.booksshops.map((booksshops, index) => {
          return (
            <div key={index}>
              <Link to={`/books/db/allbookshops/${booksshops._id}`}>
                {booksshops.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetBookShopsFromDb;

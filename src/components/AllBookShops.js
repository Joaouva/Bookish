import React from "react";
import { Link } from "react-router-dom";
import BooksFromDb from "../utils/bd";

class AllBookShops extends React.Component {
  state = {
    booksshops: [],
  };

  componentDidMount() {
    debugger;
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
                {booksshops.username}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBookShops;

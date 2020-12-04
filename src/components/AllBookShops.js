import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";

class GetBookShopsFromBd extends React.Component {
  state = {
    booksshops: [],
  };

  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    booksFromdb.getAll().then((response) => {
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
              <Link to={`/ROUTEBOOKSHOPSDETAILS/${booksshops._id}`}>
                {booksshops.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetBookShopsFromBd;

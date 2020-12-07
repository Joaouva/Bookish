import React from "react";
import { Link } from "react-router-dom";
import BooksFromBd from "../utils/bd";

class UserDetails extends React.Component {
  state = {
    id: "",
    username: "",
    city: "",
    name: "",
    isCompany: false,
    books: [],
  };
  componentDidMount() {
    const booksFromdb = new BooksFromBd();
    const id = this.props.match.params.id;
    booksFromdb.getUser(id).then((response) => {
      console.log(response.data);
      this.setState({
        id: response.data._id,
        books: response.data.books,
        username: response.data.username,
        city: response.data.city,
        name: response.data.name,
        isCompany: response.data.isCompany,
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Welcome to Library: {this.state.name} ! </h1>
        <h4>We are located in: {this.state.city}</h4>
        <h4> Heres a list of our available books</h4>

        {this.state.books.map((book, index) => {
          return (
            <div key={index}>
              <Link to={`/books/${book._id}`}> 1 - {book._id} </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default UserDetails;

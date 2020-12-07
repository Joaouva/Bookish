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
      this.setState({
        id: response.data._id,
        books: response.data.books,
        username: response.data.username,
        city: response.data.city,
        name: response.data.name,
        isCompany: response.checked.isCompany,
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Welcome to {this.state.name} </h1>

        <h3>Library location: {this.state.city}</h3>

        {this.state.books.map((books, index) => {
          return (
            <div key={index}>
              <Link to={`/books/:isbn`}>{books.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default UserDetails;

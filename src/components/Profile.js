import React from "react";
import BooksFromBd from "../utils/bd";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// welcome - nome
//about me
//library - proprios livros para vender

class Profile extends React.Component {
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
        <h1>Welcome to your profile {this.state.username}</h1>
        <h2>Your books:</h2>
        {this.state.books.map((book, index) => {
          return (
				<div key={index}>
					<Link to={`/editbook/${book.ISBN}`}> {book.title} </Link>
					<h4>Price: {this.state.books.price}</h4>
				</div>
			);
        })}
      </div>
    );
  }
}

export default Profile;

import React from "react";
import BooksFromBd from "../utils/bd";
import { withRouter } from "react-router-dom";

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
			</div>
		);
	}
}

export default Profile;
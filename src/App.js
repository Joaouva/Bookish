import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Router } from "react-router-dom";
import BooksService from "./utils/api";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  componentDidMount() {
    if (this.state.loggedInUser === null) {
      const booksService = new BooksService();
      booksService.loggedin().then((response) => {
        if (response.data._id) {
          this.setCurrentUser(response.data);
          localStorage.setItem("loggedInUser", response.data._id);
        } else {
          localStorage.removeItem("loggedInUser");
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setCurrentUser={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default App;

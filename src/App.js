import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthService from "./utils/auth";
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import GetBooksFromDb from "./components/AllBooks";
import GetBookShopsFromDb from "./components/AllBookShops";
import AddBook from "./components/AddBook";
import BookFound from "./components/BookFound";
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
      const authService = new AuthService();
      authService.loggedin().then((response) => {
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
        <ToastContainer />
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setCurrentUser={this.setCurrentUser}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/login"
            render={() => {
              return <Login setCurrentUser={this.setCurrentUser} />;
            }}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/" component={Profile} />
          <Route exact path="/bookfeed" component={GetBooksFromDb} />
          <Route exact path="/userfeed" component={GetBookShopsFromDb} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/bookfound/:isbn" component={BookFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

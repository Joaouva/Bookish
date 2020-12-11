import "./App.css";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthService from "./utils/auth";
import React from "react";
import LoginBar from "./components/LoginBar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import GetBooksFromDb from "./components/AllBooks";
import AllBookShops from "./components/AllBookShops";
import AddBook from "./components/AddBook";
import BookFound from "./components/BookFound";
import BookDetails from "./components/BookDetails";
import UserDetails from "./components/UserDetails";
import EditBook from "./components/EditBook";
import "bootstrap/dist/css/bootstrap.min.css";


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
        <LoginBar
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
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/bookfeed" component={GetBooksFromDb} />
          <Route exact path="/userfeed" component={AllBookShops} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/books/:isbn" component={BookDetails} />
          <Route exact path="/editbook/:id" component={EditBook} />
          <Route exact path="/bookfound/:isbn" render={() => {return <BookFound loggedInUser={this.state.loggedInUser} /> }}/>
          <Route exact path="/allbookshops/:id" component={UserDetails} />
          <Route
            path="/login-google"
            render={() => {
              window.location.href = `${process.env.REACT_APP_BOOKS_API}/api/auth/google`;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../utils/auth";
import BooksFromBd from "../utils/bd";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class LoginBar extends React.Component {
  logoutUser = () => {
    const authService = new AuthService();
    authService.logout().then(() => {
      this.props.setCurrentUser(null);
      localStorage.removeItem("loggedInUser");
    });
  };

  render() {
    if (this.props.loggedInUser) {
      return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/addbook">Add new book</Nav.Link>
                <Nav.Link href={`/profile/${this.props.loggedInUser._id}`}>
                  Profile
                </Nav.Link>
                <Button onClick={this.logoutUser}>Log Out</Button>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          ;
        </div>
      );
    } else {
      return (
        <div>
          <nav>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/login">Login</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/auth/google">Login with Google</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </nav>
        </div>
      );
    }
  }
}

export default LoginBar;

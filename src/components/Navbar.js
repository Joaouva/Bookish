import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../utils/auth";
import BooksFromBd from "../utils/bd";
import Navbar from "react-bootstrap/Navbar";

class Navbar extends React.Component {
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
          <nav>
            <ul>
              <li>Welcome {this.props.loggedInUser.username}</li>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/addbook">
                  Add book
                </NavLink>
              </li>
              <li>
                <NavLink exact to={`/profile/${this.props.loggedInUser._id}`}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <button onClick={this.logoutUser}>Log Out</button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/login">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/signup">
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/auth/google">
                  Login with Google
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>;

export default Navbar;

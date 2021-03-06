import React from "react";
import AuthService from "../utils/auth";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


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
				<Navbar
					className="bookish-navbar"
					sticky="top"
					bg="dark"
					variant="dark"
					expand="lg"
				>
					<Navbar.Brand className="bookish-logo" href="/">
						Bookish <br />
						<p style={{ fontSize: "0.9rem", marginTop: "-11px" }}>
							just books
						</p>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="navbar-links">
							<Nav.Link href="/addbook">Add new book</Nav.Link>
							<Nav.Link
								href={`/profile/${this.props.loggedInUser._id}`}
							>
								Profile
							</Nav.Link>
							<Nav.Link
								href="/bookfeed"
								style={{ color: "white" }}
							>
								All Books
							</Nav.Link>
							<Nav.Link
								href="/userfeed"
								style={{ color: "white" }}
							>
								All Bookshops
							</Nav.Link>

							<Button
								variant="outline-secondary"
								onClick={this.logoutUser}
							>
								Log Out
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
    } else {
      return (
			<div>
				<nav>
					<Navbar
						className="bookish-navbar"
						bg="dark"
						variant="dark"
						sticky="top"
						expand="lg"
					>
						<Navbar.Brand className="bookish-logo" href="/">
							Bookish
							<p
								style={{
									fontSize: "0.9rem",
									marginTop: "-11px",
								}}
							>
								just books
							</p>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="navbar-links">
								<Nav.Link className="google" href="/login">
									Login
								</Nav.Link>
								<Nav.Link className="google" href="/signup">
									Signup
								</Nav.Link>
								<Nav.Link href="/login-google">
									<img
										style={{ height: "50px" }}
										alt="book-cover"
										src="../../images/google-logo.png"
									/>
								</Nav.Link>
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

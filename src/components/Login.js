import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const authService = new AuthService();
    authService
      .login(username, password)
      .then((response) => {
        this.props.setCurrentUser(response.data);
        this.props.history.push("/");
        toast.success("Login Successfully!", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
      })
      .catch(() => {
        toast.error("Invalid Login");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username: </label>
          <input
            className="login-div"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password: </label>
          <input
            className="login-div"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="login">Login</button>
        </form>
        <p style={{marginTop:"3px"}}>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Login);

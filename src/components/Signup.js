import React from "react";
import AuthService from "../utils/auth";
import { Link, withRouter } from "react-router-dom";
class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    city: "",
    isCompany: false,
  };
  handleChange = (event) => {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const authService = new AuthService();
    const { username, password, name, isCompany, city } = this.state;
    authService
      .signup({
        username,
        password,
        name,
        isCompany,
        city,
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  render() {
    return (
      <div className="div-sign-up">
        <form  className="sign-up-form" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Are you a Company?</label>
          <input
            type="checkbox"
            name="isCompany"
            value={this.state.isCompany}
            onChange={this.handleChange}
          />
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input id="btn-signup" type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Signup);

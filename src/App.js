import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthService from './utils/auth';
import React from 'react';
import Navbar from './components/Navbar'


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
                <Navbar
                    loggedInUser={this.state.loggedInUser}
                    setCurrentUser={this.setCurrentUser}
                />
            </div>
        );
    }
}

export default App;

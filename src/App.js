import './App.css';
import React from 'react';
import Navbar from './components/Navbar';


class App extends React.Component {
  state = {
    loggedInUser: null
  }
  render () {
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

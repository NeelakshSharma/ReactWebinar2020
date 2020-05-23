import React from "react";
import logo from "./logo.svg";
import SignUp from "./Signup";
import "./App.css";
import Dashboard from "./Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  setUsername = (username) => {
    console.log("Fired from signup: ", username);
    this.setState({
      username: username,
    });
  };

  render() {
    if (this.state.username === "") {
      return <SignUp setUsername={this.setUsername} />;
    }
    return <Dashboard username={this.state.username} />;
  }
}

export default App;

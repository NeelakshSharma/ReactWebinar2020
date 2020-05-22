import React from "react";
// import "./App.css";
import SignUp from "./Components/SignUp";
import TodoDashboard from "./Components/TodoDashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.setUsername = this.setUsername.bind(this);
  }
  setUsername(username) {
    console.log(username);
    this.setState({
      username: username,
    });
  }

  logout = () => {
    this.setState({
      username: "",
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.username === "" ? (
          <SignUp setUsername={this.setUsername} />
        ) : (
          <TodoDashboard username={this.state.username} logout={this.logout} />
        )}
      </div>
    );
  }
}

export default App;

import React from "react";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  setUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.setUsername(this.state.username);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={this.handleFormSubmit}>
          <label>Enter your name</label>
          <input type="text" onChange={this.setUsername}></input>
          <button type="submit">Submit</button>
          {this.props.name}
        </form>
      </div>
    );
  }
}

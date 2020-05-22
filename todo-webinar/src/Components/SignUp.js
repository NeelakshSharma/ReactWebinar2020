import React, { Component } from "react";
import Logo from "../Media/logo.png";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  usernameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.props.setUsername(this.state.username);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${Logo})`,
        }}
      >
        <form onSubmit={this.formSubmit}>
          <label style={{ color: "white", marginTop: 40, marginRight: 5 }}>
            Please Enter Your Username
          </label>
          <input
            type="text"
            onChange={this.usernameHandler}
            value={this.state.username}
            style={{ marginTop: 40 }}
          />
          <button style={{ marginTop: 40, marginLeft: 5 }} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

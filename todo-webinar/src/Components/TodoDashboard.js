import React, { Component } from "react";

export default class TodoDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      todoList: [],
      doneList: [],
    };
  }

  handleTaskName = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.concat(this.state.taskName),
      taskName: "",
    });
  };

  taskDone = (index) => {
    console.log(index);
    this.setState({
      doneList: this.state.doneList.concat(this.state.todoList[index]),
      todoList: this.state.todoList.filter((element, ind) => ind !== index),
    });
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 30,
          }}
        >
          <h1>Welcome {this.props.username}</h1>
          <button onClick={this.logout} style={{ height: 30 }}>
            Logout
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={this.handleFormSubmit}>
            <label>Enter task here</label>
            <input
              type="text"
              onChange={this.handleTaskName}
              value={this.state.taskName}
            />
            <button type="submit">Add task</button>
          </form>
          <h3>Todo List:</h3>
          <ul>
            {this.state.todoList.map((element, index) => (
              <div key={index}>
                <li>{element}</li>
                <button onClick={() => this.taskDone(index)}>Done</button>
              </div>
            ))}
          </ul>
          <h3>Task Done List:</h3>
          <ul>
            {this.state.doneList.map((element, index) => (
              <div key={index}>
                <li>
                  <strike>{element}</strike>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

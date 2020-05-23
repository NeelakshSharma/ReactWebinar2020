import React from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      todoTaskList: [],
      completedTaskList: [],
    };
  }

  setTaskName = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todoTaskList: this.state.todoTaskList.concat(this.state.taskName),
      taskName: "",
    });
  };

  handleCompleted = (index) => {
    console.log(index);
    this.setState({
      todoTaskList: this.state.todoTaskList.filter(
        (element, index2) => index2 !== index
      ),
      completedTaskList: this.state.completedTaskList.concat(
        this.state.todoTaskList[index]
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.props.username}</h1>
        <br />
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Enter your task</label>
            <input type="text" onChange={this.setTaskName}></input>
            <button type="submit">Submit</button>
            {this.props.name}
          </form>
        </div>
        <h1>TODO Tasks</h1>
        <ul>
          {this.state.todoTaskList.map((element, index) => (
            <li>
              {element}
              <button
                onClick={() => {
                  this.handleCompleted(index);
                }}
              >
                Completed
              </button>
            </li>
          ))}
        </ul>
        <h1>Completed Tasks</h1>
        <ul>
          {this.state.completedTaskList.map((element, index) => (
            <li>
              <strike>{element}</strike>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

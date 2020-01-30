import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/toDoState";

const connectToRedux = connect();

class HeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: ""
    };
  }
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.addTodoToStore();
      console.log("do validate");
    }
  };
  textTodoChange = event => {
    const textTodo = event.target.value;
    this.setState({ textTodo });
  };
  addTodoToStore = () => {
    const { dispatch } = this.props;
    dispatch(addTodo(this.state.textTodo.trim()));
    this.setState({ textTodo: "" });
  };
  render() {
    return (
      <div className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          type="text"
          value={this.state.textTodo}
          onChange={this.textTodoChange}
          onKeyPress={this.handleKeyDown}
          placeholder="Title..."
        />
        <span onClick={this.addTodoToStore} className="addBtn">
          Add
        </span>
      </div>
    );
  }
}

export default connectToRedux(HeaderList);

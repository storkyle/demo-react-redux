import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo, checkTodo } from "../store/toDoState";

const connectToRedux = connect();

class ToDo extends Component {
  changeStateCheckedTodo = id => () => this.props.dispatch(checkTodo(id));
  removeTodoInStore = id => () => this.props.dispatch(removeTodo(id));

  render() {
    const { checked, name, id } = this.props;
    return (
      <li className={checked ? "checked" : ""}>
        <div onClick={this.changeStateCheckedTodo(id)}>{name}</div>
        <span className="close" onClick={this.removeTodoInStore(id)}>
          ×
        </span>
      </li>
    );
  }
}

export default connectToRedux(ToDo);

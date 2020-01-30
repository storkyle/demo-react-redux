import React, { Component } from "react";
import ToDo from "./todoComponent";

export default class ListTodo extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }
}

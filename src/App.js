import React, { Component } from "react";
import { connect } from "react-redux";
import "./assets/css/todo.css";
import HeaderToDo from "./components/headerComponent";
import ListToDo from "./components/listComponent";

class App extends Component {
  render() {
    const { visibleTodos } = this.props;
    return (
      <div className="App">
        <HeaderToDo />
        <ListToDo todos={visibleTodos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibleTodos: state.todos
  };
}
export default connect(mapStateToProps)(App);

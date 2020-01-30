import { createStore, combineReducers } from "redux";
import todosReducer from "./toDoState";

const rootReducer = combineReducers({
  todos: todosReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

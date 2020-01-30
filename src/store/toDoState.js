import { remove, findIndex } from "lodash";

const ADD_TODO = "ADD_TODO";
const CHECK_TODO = "CHECK_TODO";
const REMOVE_TODO = "REMOVE_TODO";
let nextTodoId = 0;

// actions
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    checked: false,
    name: text
  };
};
export const checkTodo = id => {
  return {
    type: CHECK_TODO,
    id
  };
};
export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todo = action.name
        ? {
            id: action.id,
            name: action.name,
            checked: action.checked
          }
        : false;

      return todo ? [...state, todo] : [...state];

    case CHECK_TODO:
      const index = findIndex(state, item => item.id === action.id);
      console.log({ action, index });
      if (index >= 0) state[index].checked = !state[index].checked;
      return [...state];

    case REMOVE_TODO:
      remove(state, item => item.id === action.id);
      return [...state];

    default:
      return state;
  }
}

export default todosReducer;

import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"; 



const initialState = {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
  };

// const initialState = {};
const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TODOS: 
            return action.todos;
        case RECEIVE_TODO: 
            let nextState = merge({}, state); 
            nextState[action.todo.id] = action.todo; 
            return nextState;
        default: 
            return state; 
    }
}; 

export default todosReducer;
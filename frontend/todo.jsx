import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
class IntroComponent extends React.Component {
    render() {
        return (    
            <h1>please work</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store; 
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render(<IntroComponent />, document.getElementById('content'));
});
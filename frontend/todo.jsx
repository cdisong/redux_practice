import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app.jsx';
import Root from './components/root.jsx'; 
import allTodos from './reducers/selectors.js';
import { createStore } from 'redux';

class IntroComponent extends React.Component {
    render() {
        return (    
            <h1>if you see this, you've fucked up</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    configureStore();
    window.store = store; 
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
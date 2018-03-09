import React from 'react';
import TodoListContainer from './todos/todo_list_container.jsx';

const App = () => {
    return (  
        <div classname="App">
            <h1> from app</h1>
            <TodoListContainer/>
        </div>
    );
}; 

export default App; 
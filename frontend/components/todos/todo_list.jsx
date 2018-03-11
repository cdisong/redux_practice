
import React from 'react'; 
import TodoListItem from './todo_list_item'; 

// module.exports = () => <h3>why the heck isn't this showing up</h3>;



// const TodoList = ({todos}) => (
//     <div>
//         <ul>
//             {todos.map((idx) => <li>{idx.title}</li>)}
//         </ul>

//     </div>
// );
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.todos;
    }
    render() { 
        return (
            <div>
                <ul>
                    <TodoListItem todos = {this.state} />
                </ul>
            </div>
        );
    }
}

export default TodoList; 
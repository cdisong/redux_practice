import React from 'react'; 
import TodoList from './todo_list';
import TodoListItem from './todo_list_item';


class TodoDetailItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.todo;
    }
    render() {
        return(
            <div>
                <ul> 
                    {console.log(this.state)}
                   <li> {this.state[0].body} </li>
                   <li> done: {this.state[0].done.toString()} </li>
                </ul>
            </div>
        );
    }
}

export default TodoDetailItem;
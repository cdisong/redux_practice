import React from 'react'; 
import TodoList from './todo_list';
import TodoDetailItem from './todo_detail_item';

class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.todos;
    }
    render() {
        return(
            <div>
                <ul>
                    {console.log(this.state)}
                    {console.log(this.state[0].id)}
                    {this.state.map((idx) => <li key={idx}>{idx.title}<TodoDetailItem todo={[idx]}/></li>)}
                
                </ul>
            </div>
        );
    }
}

export default TodoListItem;
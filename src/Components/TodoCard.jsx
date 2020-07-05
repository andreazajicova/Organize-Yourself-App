import React from 'react';
import './stylesheet/TodoCard.css';

const TodoCard = props => {
    return (
       
        <li 
            onChange={props.toggleTodo} 
            style={{ textDecoration: props.done ? 'line-through' : '' }} 
            item={props.text}>
            <button 
                className="App__toggle" 
                onClick={props.toggleTodo} >
                Check/Uncheck
            </button>
           {props.todo} 
            <button 
                style={{ display: props.done ? '' : 'none' }} 
                className="App__delete" 
                onClick={props.deleteTodo}>
                Delete
            </button>
        </li>
              
    )
}



export default TodoCard;
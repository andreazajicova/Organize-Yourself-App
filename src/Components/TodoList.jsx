import React from 'react';
import Draggable from 'react-draggable';
import TodoCard from './TodoCard';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <Draggable>
                <TodoCard 
                key={todo.id} 
                todo={todo.name}
                done={todo.done}
                deleteTodo={() => props.deleteTodo(todo.id)}
                toggleTodo={() => props.toggleTodo(todo.id)}
                />
                </Draggable>
            ))}
        </ul>
    )
}


export default TodoList;
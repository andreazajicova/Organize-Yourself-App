import React from 'react';
import TodoCard from './TodoCard';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <TodoCard 
                key={todo.id} 
                todo={todo.name}
                done={todo.done}
                deleteTodo={() => props.deleteTodo(todo.id)}
                toggleTodo={() => props.toggleTodo(todo.id)}
                />
            ))}
        </ul>
    )
}


export default TodoList;
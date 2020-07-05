import React from 'react';
import './stylesheet/TodoInputForm.css';

const TodoInputForm = props => {
    return (
      <div className="App__submit">
        <form 
          onSubmit={props.addTodo} 
          className="App__form">
          <input 
            className="App__input" type="text" placeholder="Add a new todo"
            onChange={props.inputHandler} 
            value={props.todo} 
          />
          <button 
            className="App__add"
            disabled={!props.todo.length} 
            type="submit" name="submit" value="submit">
            Add todo
          </button>
        </form>
      </div>
    )
}

export default TodoInputForm;
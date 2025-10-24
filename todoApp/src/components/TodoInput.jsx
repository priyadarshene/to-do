import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    addTodo(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
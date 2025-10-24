import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos found!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
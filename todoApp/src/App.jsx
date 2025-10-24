import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: text,
          completed: false
        }
      ]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const pendingCount = todos.filter(t => !t.completed).length;

  return (
    <div className="app">
      <div className="container">
        <Header pendingCount={pendingCount} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TodoInput addTodo={addTodo} />
        <TodoList 
          todos={getFilteredTodos()}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
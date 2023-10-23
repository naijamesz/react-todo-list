import React, { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
// import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: true },
    { id: 3, text: "Master TypeScript", completed: false }
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="New To-Do"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;

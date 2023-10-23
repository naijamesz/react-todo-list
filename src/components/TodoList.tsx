import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  return (
    <>
      <div className="container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;

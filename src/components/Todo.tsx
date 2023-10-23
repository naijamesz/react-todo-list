import React, { useState } from "react";

interface TodoProps {
  todo: { id: number; text: string; completed: boolean };
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, newText);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={newText} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Todo;

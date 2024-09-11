import { FC } from 'react';

interface Todo {
  id: number;
  text: string;
  completed?: boolean;
  date: string; // Assuming the date is stored as a string
}

interface TodoItemProps {
    todo: Todo; 
    onToggleComplete: (id: number) => void; 
    onRemove: (id: number) => void; 
    completed?: boolean; 
  }

const TodoItem: FC<TodoItemProps> = ({ todo, onToggleComplete, onRemove, completed }) => {
  return (
    <div className={`flex items-center p-4 border-b border-gray-300 ${completed ? 'bg-green-100' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="mr-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <span className="ml-4 text-sm text-gray-500">{todo.date}</span> {/* Display date */}
      <button
        onClick={() => onRemove(todo.id)}
        className="ml-4 text-red-500 hover:text-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default TodoItem;

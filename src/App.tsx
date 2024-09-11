import { useState, useEffect, FC } from 'react';
import TodoHeader from './TodoHeader.tsx';
import TodoItem from './TodoItem.tsx';
import TodoInput from './TodoInput.tsx';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  date: string;
}

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isInitialized, setIsInitialized] = useState(false); // To track if initial load is done

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
    setTodos(savedTodos);
    setIsInitialized(true); // Mark that initial load is complete
  }, []);

  // Save todos to localStorage whenever todos change, but not on the first render
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isInitialized]);

  const handleAddTodo = (text: string) => {
    if (text) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        date: new Date().toLocaleDateString(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <TodoHeader />
        <TodoInput onAddTodo={handleAddTodo} />
        <div className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Tasks</h2>
          {activeTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onRemove={handleRemoveTodo}
            />
          ))}
        </div>
        {completedTodos.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-4 text-2xl font-semibold">Things Done</h2>
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
                onRemove={handleRemoveTodo}
                completed
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

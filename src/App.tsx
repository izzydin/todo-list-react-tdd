import { useState } from 'react'
import './App.css'
import { TodoForm } from './features/todos/components/TodoForm'
import { TodoList } from './features/todos/components/TodoList'
import type { Todo } from './features/todos/model/todo.types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (text: string) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  )
}

export default App

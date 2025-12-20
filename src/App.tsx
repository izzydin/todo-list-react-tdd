import { useState } from 'react'
import './App.css'
import { TodoForm } from './features/todos/components/TodoForm'
import { TodoList } from './features/todos/components/TodoList'

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const handleAdd = (text: string) => {
    setTodos([...todos, text])
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAdd} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App

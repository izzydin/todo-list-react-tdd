import { useState } from 'react'
import './App.css'
import { TodoForm } from './features/todos/components/TodoForm'

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const handleAdd = (text: string) => {
    setTodos([...todos, text])
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAdd} />
      {todos.length === 0 && <p>No tasks yet. Add one!</p>}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

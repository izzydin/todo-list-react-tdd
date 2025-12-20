import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (!inputValue) return
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
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

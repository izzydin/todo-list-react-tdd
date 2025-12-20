import { useState } from 'react'
import './App.css'

function App() {
  const [todos] = useState([])

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      {todos.length === 0 && <p>No tasks yet. Add one!</p>}
    </div>
  )
}

export default App

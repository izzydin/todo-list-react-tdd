import { useReducer } from 'react'
import './App.css'
import { TodoForm } from './features/todos/components/TodoForm'
import { TodoList } from './features/todos/components/TodoList'
import { todoReducer } from './features/todos/model/todo.reducer'

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const handleAdd = (text: string) => {
    dispatch({ type: 'ADDED', text })
  }

  const handleToggle = (id: string) => {
    dispatch({ type: 'TOGGLED', id })
  }

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETED', id })
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  )
}

export default App

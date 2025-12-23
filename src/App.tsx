import './App.css'
import { TodoForm } from './features/todos/components/TodoForm'
import { TodoList } from './features/todos/components/TodoList'
import { useTodos } from './features/todos/hooks/useTodos'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App

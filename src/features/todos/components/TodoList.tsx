import { TodoItem } from './TodoItem'
import type { Todo } from '../model/todo.types'

interface TodoListProps {
    todos: Todo[]
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    if (todos.length === 0) {
        return <p>No tasks yet. Add one!</p>
    }

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    )
}

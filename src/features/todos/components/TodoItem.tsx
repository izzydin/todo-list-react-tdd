import type { Todo } from '../model/todo.types'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: string) => void
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
        <li
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
            }}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                aria-label={`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'compelte'}`}
            />
            {todo.text}
        </li>
    )
}

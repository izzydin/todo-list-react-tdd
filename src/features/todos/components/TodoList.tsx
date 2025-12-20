interface TodoListProps {
    todos: string[]
}

export function TodoList({ todos }: TodoListProps) {
    if (todos.length === 0) {
        return <p>No tasks yet. Add one!</p>
    }

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    )
}

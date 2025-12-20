interface TodoItemProps {
    todo: string
}

export function TodoItem({ todo }: TodoItemProps) {
    return <li>{todo}</li>
}

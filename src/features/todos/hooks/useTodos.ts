import { useReducer } from 'react'
import { todoReducer } from '../model/todo.reducer'

export function useTodos() {
    const [todos, dispatch] = useReducer(todoReducer, [])

    const addTodo = (text: string) => {
        dispatch({ type: 'ADDED', text })
    }

    const toggleTodo = (id: string) => {
        dispatch({ type: 'TOGGLED', id })
    }

    const deleteTodo = (id: string) => {
        dispatch({ type: 'DELETED', id })
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    }
}

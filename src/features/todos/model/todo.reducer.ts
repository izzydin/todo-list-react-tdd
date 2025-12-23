import type { Todo } from './todo.types'

export type TodoAction =
    | { type: 'ADDED'; text: string }
    | { type: 'TOGGLED'; id: string }
    | { type: 'DELETED'; id: string }

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
    switch (action.type) {
        case 'ADDED': {
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    text: action.text,
                    completed: false,
                },
            ]
        }
        case 'TOGGLED': {
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
            )
        }
        case 'DELETED': {
            return state.filter((todo) => todo.id !== action.id)
        }
        default: {
            return state
        }
    }
}

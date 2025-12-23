import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTodos } from '../hooks/useTodos'

describe('useTodos', () => {
    it('initializes with empty todos array', () => {
        const { result } = renderHook(() => useTodos())
        expect(result.current.todos).toEqual([])
    })

    it('adds a new todo', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.addTodo('Buy milk')
        })

        expect(result.current.todos).toHaveLength(1)
        expect(result.current.todos[0].text).toBe('Buy milk')
        expect(result.current.todos[0].completed).toBe(false)
        expect(result.current.todos[0].id).toBeDefined()
    })

    it('toggles todo completion status', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.addTodo('Buy milk')
        })

        const todoId = result.current.todos[0].id

        act(() => {
            result.current.toggleTodo(todoId)
        })

        expect(result.current.todos[0].completed).toBe(true)

        act(() => {
            result.current.toggleTodo(todoId)
        })

        expect(result.current.todos[0].completed).toBe(false)
    })

    it('deletes a todo', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.addTodo('Buy milk')
            result.current.addTodo('Walk dog')
        })

        expect(result.current.todos).toHaveLength(2)

        const firstTodoId = result.current.todos[0].id

        act(() => {
            result.current.deleteTodo(firstTodoId)
        })

        expect(result.current.todos).toHaveLength(1)
        expect(result.current.todos[0].text).toBe('Walk dog')
    })

    it('handles multiple operations', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.addTodo('Task 1')
            result.current.addTodo('Task 2')
            result.current.addTodo('Task 3')
        })

        expect(result.current.todos).toHaveLength(3)

        const secondTodoId = result.current.todos[1].id

        act(() => {
            result.current.toggleTodo(secondTodoId)
        })

        expect(result.current.todos[1].completed).toBe(true)

        act(() => {
            result.current.deleteTodo(secondTodoId)
        })

        expect(result.current.todos).toHaveLength(2)
        expect(result.current.todos.map((t) => t.text)).toEqual(['Task 1', 'Task 3'])
    })
})

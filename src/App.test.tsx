import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders the application title', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { level: 1, name: /todo list/i });
        expect(heading).toBeInTheDocument();
    });

    it('shows empty state message when no todos exist', () => {
        render(<App />);
        const message = screen.getByText(/no tasks yet. add one!/i);
        expect(message).toBeInTheDocument();
    });
    it('allows adding a new todo item', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        const button = screen.getByRole('button', { name: /add/i });

        fireEvent.change(input, { target: { value: 'Buy milk' } });
        fireEvent.click(button);

        expect(screen.getByText('Buy milk')).toBeInTheDocument();
        expect(input).toHaveValue('');
    });

    it('does not allow adding empty or whitespace todos', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        const button = screen.getByRole('button', { name: /add/i });

        // Try adding spaces
        fireEvent.change(input, { target: { value: '   ' } });
        fireEvent.click(button);

        // Expect empty state message to remain (meaning item was not added)
        const message = screen.getByText(/no tasks yet. add one!/i);
        // For now let's just assert the list is empty.
    });

    it('renders multiple todo items correctly', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        const button = screen.getByRole('button', { name: /add/i });

        const tasks = ['Task 1', 'Task 2', 'Task 3'];

        tasks.forEach(task => {
            fireEvent.change(input, { target: { value: task } });
            fireEvent.click(button);
        });

        tasks.forEach(task => {
            expect(screen.getByText(task)).toBeInTheDocument();
        });
    });

    it('allows marking a todo as completed', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        const button = screen.getByRole('button', { name: /add/i });

        fireEvent.change(input, { target: { value: 'Complete me' } });
        fireEvent.click(button);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        const todoText = screen.getByText('Complete me');
        expect(todoText).toHaveStyle('text-decoration: line-through');
    });
});

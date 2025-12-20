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
});

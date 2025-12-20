import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
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
});

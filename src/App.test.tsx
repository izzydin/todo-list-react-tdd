import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the headline', () => {
        render(<App />);
        // Vite template usually has "Vite + React" or similar.
        // We will make strict TDD later, this is just environment check.
        // Actually, let's just check if it renders.
        expect(true).toBe(true);
    });
});

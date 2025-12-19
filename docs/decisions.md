# Architectural Decisions

This document records the architectural choices made for the Todo List application.

## 1. Feature-Based Folder Structure

**Decision:**
Organize the codebase by feature features (e.g., `features/todo-list`) rather than by technical layer (e.g., `components`, `reducers`, `utils`).

**Justification:**
-   **Scalability**: As the application grows, features remain self-contained.
-   **Collocation**: Related tests, styles, and logic live together, reducing context switching and import complexity.
-   **Modularity**: Makes it easier to refactor or delete entire features without leaving orphan code.

## 2. React + TypeScript

**Decision:**
Use React 18+ with strict TypeScript configuration.

**Justification:**
-   **Type Safety**: Catching errors at compile-time drastically reduces runtime crashes.
-   **Developer Experience**: Superior strict typing provides better autocomplete and self-documentation.
-   **Ecosystem Standards**: modern React patterns (Hooks) align perfectly with functional TypeScript.

## 3. TDD (Test-Driven Development) & BDD (Behavior-Driven Development)

**Decision:**
Adopt a strict "Red-Green-Refactor" TDD cycle, testing behavior (BDD) rather than implementation details.

**Justification:**
-   **Reliability**: Ensures every line of code serves a purpose and is verified.
-   **Refactoring Confidence**: We can aggressively optimize implementation knowing behavior is locked in by tests.
-   **Documentation**: Tests serve as living documentation of how the system is *supposed* to behave.

## 4. Local State vs. Redux

**Decision:**
Prefer React's built-in state management (`useState`, `useReducer`, Context API) over external libraries like Redux for this scope.

**Justification:**
-   **Simplicity (YAGNI)**: "You Ain't Gonna Need It." A todo list does not inherently require a global complex state machine.
-   **Boilerplate Reduction**: Redux introduces significant indirection. Local state keeps logic close to where it's used.
-   **Migration Path**: If state complexity increases, we can lift state or introduce a library (like Zustand or Redux Toolkit) later without rewriting the app.

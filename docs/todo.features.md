# Todo List Features

Feature: Manage Todo List
  As a User
  I want to manage my daily tasks
  So that I can stay organized and productive

  Scenario: View empty todo list
    Given I have no tasks
    When I open the application
    Then I should see a message "No tasks yet. Add one!"
    And I should see an input field to add a new task

  Scenario: Add a todo
    Given I am on the todo list page
    When I enter "Buy milk" into the task input
    And I press the "Add" button
    Then I should see "Buy milk" in the list of tasks
    And the input field should be cleared

  Scenario: Complete a todo
    Given I have a task "Walk the dog"
    When I click the checkbox next to "Walk the dog"
    Then the task "Walk the dog" should be marked as completed
    And the task text should have a strikethrough style

  Scenario: Delete a todo
    Given I have a task "Wash dishes"
    When I click the "Delete" button next to "Wash dishes"
    Then the task "Wash dishes" should be removed from the list

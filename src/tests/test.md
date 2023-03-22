# TodoList Component

The Todo App contains two files TodoList.tsx and Home.tsx. The TodoList component is a presentational component that
receives the todos as props, while the Home component is a container component that is responsible for managing the
state of the app and rendering the TodoList component.

## Adding a Todo

* Should add a new todo item to the list when the user enters text and clicks the Add button or presses Enter.
* Should display an alert message if the user tries to add an empty todo.
* Should clear the input field after adding a new todo.

## Completing a Todo

* Should mark the todo as completed when the user clicks the checkbox next to it.
* Should update the UI to visually indicate that the todo is completed.
* Should unmark the todo if the user clicks the checkbox again.
* Should call the markAsCompleted prop with the id of the completed todo item when the checkbox is clicked.

## Clearing Todos

* Should remove all completed todos when the Clear button is clicked.

## Testing approach for Todo App

[Testing Link](@/tests/unit/todo-list.test.tsx)

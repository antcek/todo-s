//@ts-ignore
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders ToDo App", () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo App/i);
  expect(linkElement).toBeInTheDocument();
});

test("can add a task", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/New task/i);
  const button = screen.getByText(/Add Task/i);
  fireEvent.change(input, { target: { value: "Test task" } });
  fireEvent.click(button);
  const task = screen.getByText(/Test task/i);
  expect(task).toBeInTheDocument();
});

test("can toggle a task", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/New task/i);
  const button = screen.getByText(/Add Task/i);
  fireEvent.change(input, { target: { value: "Test task" } });
  fireEvent.click(button);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  const task = screen.getByText(/Test task/i);
  expect(task).toHaveStyle("text-decoration: line-through");
});

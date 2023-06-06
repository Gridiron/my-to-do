import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../todo-list";
import { checkItem, removeItem } from "store/slices/todo.slice";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("TodoList", () => {
  test("should render the todo list items correctly", () => {
    useSelector.mockReturnValue({
      list: [
        { id: "1", title: "Task 1", isCompleted: false },
        { id: "2", title: "Task 2", isCompleted: true },
        { id: "3", title: "Task 3", isCompleted: false },
      ],
      filter: "all",
    });

    render(<TodoList />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("Task 1");
    expect(items[1]).toHaveTextContent("Task 2");
    expect(items[2]).toHaveTextContent("Task 3");
  });

  test("should call checkItem when checkbox is clicked", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    useSelector.mockReturnValue({
      list: [
        { id: "1", title: "Task 1", isCompleted: false },
        { id: "2", title: "Task 2", isCompleted: true },
        { id: "3", title: "Task 3", isCompleted: false },
      ],
      filter: "all",
    });
    render(<TodoList />);
    const labelToCheckbox = screen.getByTestId(DATA_TEST_IDS.CHECKBOX_LABEL);
    fireEvent.click(labelToCheckbox);

    expect(dispatchMock).toHaveBeenCalledWith(
      checkItem({ id: "1", isCompleted: true })
    );
  });

  test("should call removeItem when remove button is clicked", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    useSelector.mockReturnValue({
      list: [
        { id: "1", title: "Task 1", isCompleted: false },
        { id: "2", title: "Task 2", isCompleted: true },
        { id: "3", title: "Task 3", isCompleted: false },
      ],
      filter: "all",
    });

    render(<TodoList />);

    const removeButtons = screen.getAllByRole("button", { name: "Remove" });
    fireEvent.click(removeButtons[1]);

    expect(dispatchMock).toHaveBeenCalledWith(removeItem({ id: "2" }));
  });
});

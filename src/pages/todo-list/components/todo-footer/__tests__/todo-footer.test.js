import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import TodoFooter from "../todo-footer";
import { FILTER_NAMES } from "constants/filter-names.const";
import { removeCompletedItems, setFilter } from "store/slices/todo.slice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("TodoFooter", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  test("should render the correct number of items left", () => {
    useSelector.mockReturnValue({
      filter: FILTER_NAMES.ALL,
      list: [
        { id: "1", title: "Task 1", isCompleted: false },
        { id: "2", title: "Task 2", isCompleted: true },
        { id: "3", title: "Task 3", isCompleted: false },
      ],
    });

    render(<TodoFooter />);
    expect(screen.getByText("2 items left")).toBeInTheDocument;
  });

  test("should call setFilter when clicking on a filter button", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({
      filter: FILTER_NAMES.ACTIVE,
      list: [],
    });

    render(<TodoFooter />);
    const allButton = screen.getByText("All");

    fireEvent.click(allButton);
    expect(dispatch).toHaveBeenCalledWith(
      setFilter({ filter: FILTER_NAMES.ALL })
    );
  });

  test("should call removeCompletedItems when clicking on 'Clear completed'", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({
      filter: FILTER_NAMES.ALL,
      list: [
        { id: "1", title: "Task 1", isCompleted: false },
        { id: "2", title: "Task 2", isCompleted: true },
        { id: "3", title: "Task 3", isCompleted: true },
      ],
    });

    render(<TodoFooter />);
    const clearCompletedButton = screen.getByText("Clear completed");

    fireEvent.click(clearCompletedButton);
    expect(dispatch).toHaveBeenCalledWith(removeCompletedItems());
  });
});

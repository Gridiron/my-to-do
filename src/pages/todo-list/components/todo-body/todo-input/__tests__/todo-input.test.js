import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import TodoInput from "../todo-input";
import { addItem } from "store/slices/todo.slice";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("TodoInput", () => {
  test("should dispatch 'addItem' action with correct payload on form submission", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<TodoInput />);

    const input = screen.getByRole("textbox");
    const form = screen.getByTestId(DATA_TEST_IDS.FORM);
    const label = screen.getByTestId(DATA_TEST_IDS.CHECKBOX_LABEL);

    fireEvent.click(label);
    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.submit(form);
    expect(dispatchMock).toHaveBeenCalledWith(
      addItem({ isCompleted: true, title: "Buy groceries" })
    );
  });
});

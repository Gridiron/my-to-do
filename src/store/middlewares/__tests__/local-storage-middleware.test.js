import { LocalStorageService } from "services/local-storage.service";
import localStorageMiddleware from "../local-storage-middleware";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, addItem } from "store/slices/todo.slice";

expect.extend({
  toEqualList(received, expected) {
    const receivedList = received.list;
    const expectedList = expected.list;

    const pass =
      receivedList.length === expectedList.length &&
      receivedList.every((item) =>
        expectedList.some((expectedItem) => this.equals(item, expectedItem))
      );

    if (pass) {
      return {
        message: () => "List values match expected",
        pass: true,
      };
    } else {
      return {
        message: () => "List values do not match expected",
        pass: false,
      };
    }
  },
});

describe("localStorageMiddleware", () => {
  let store;
  let next;
  let action;
  let initialState;
  let item;
  beforeEach(() => {
    item = {
      id: expect.any(String),
      title: "Buy groceries",
      isCompleted: false,
    };
    initialState = {
      todoData: {
        filter: "ALL",
        list: [
          { id: "1", title: "Task 1", isCompleted: false },
          { id: "2", title: "Task 2", isCompleted: true },
          { id: "3", title: "Task 3", isCompleted: false },
        ],
      },
    };
    store = configureStore({
      reducer: { todoData: todoReducer },
      preloadedState: initialState,
    });
    next = jest.fn();
    action = addItem(item);
  });

  test("should call next middleware with the action", () => {
    localStorageMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  test("should save the state to local storage", () => {
    const saveDataMock = jest.spyOn(LocalStorageService, "saveData");

    localStorageMiddleware(store)(next)(action);

    expect(saveDataMock).toHaveBeenCalled();

    saveDataMock.mockRestore();
  });
});

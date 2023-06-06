import { configureStore } from "@reduxjs/toolkit";
import {
  todoReducer,
  addItem,
  removeItem,
  checkItem,
  removeCompletedItems,
  setFilter,
  reorderItems,
} from "../todo.slice";

describe("todoSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { todoData: todoReducer },
    });
  });

  test("should add an item to the list", () => {
    const item = {
      id: expect.any(String),
      title: "Buy groceries",
      isCompleted: false,
    };
    store.dispatch(addItem(item));
    const state = store.getState().todoData;
    expect(state.list).toHaveLength(1);
    expect(state.list[0]).toEqual(item);
  });

  test("should remove an item from the list", () => {
    const initialState = {
      todoData: {
        filter: "ALL",
        list: [
          { id: "1", title: "Task 1", isCompleted: false },
          { id: "2", title: "Task 2", isCompleted: false },
          { id: "3", title: "Task 3", isCompleted: false },
        ],
      },
    };
    store = configureStore({
      reducer: { todoData: todoReducer },
      preloadedState: initialState,
    });

    const itemIdToRemove = "2";
    store.dispatch(removeItem({ id: itemIdToRemove }));
    const state = store.getState().todoData;
    expect(state.list).toHaveLength(2);
    expect(state.list.map((item) => item.id)).not.toContain(itemIdToRemove);
  });

  test("should check an item in the list", () => {
    const initialState = {
      todoData: {
        filter: "ALL",
        list: [
          { id: "1", title: "Task 1", isCompleted: false },
          { id: "2", title: "Task 2", isCompleted: false },
          { id: "3", title: "Task 3", isCompleted: false },
        ],
      },
    };
    store = configureStore({
      reducer: { todoData: todoReducer },
      preloadedState: initialState,
    });

    const itemIdToCheck = "2";
    store.dispatch(checkItem({ id: itemIdToCheck, isCompleted: true }));
    const state = store.getState().todoData;
    const checkedItem = state.list.find((item) => item.id === itemIdToCheck);
    expect(checkedItem.isCompleted).toBe(true);
  });

  test("should remove completed items from the list", () => {
    const initialState = {
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

    store.dispatch(removeCompletedItems());
    const state = store.getState().todoData;
    expect(state.list.length).toBe(2);
    expect(state.list.map((item) => item.isCompleted)).not.toContain(true);
  });

  test("should set the filter in the state", () => {
    const initialState = {
      todoData: {
        filter: "ALL",
        list: [],
      },
    };
    store = configureStore({
      reducer: { todoData: todoReducer },
      preloadedState: initialState,
    });

    const filter = "COMPLETED";
    store.dispatch(setFilter({ filter }));
    const state = store.getState().todoData;
    expect(state.filter).toBe(filter);
  });

  test("should reorder items in the list", () => {
    const initialState = {
      todoData: {
        filter: "ALL",
        list: [
          { id: "1", title: "Task 1", isCompleted: false },
          { id: "2", title: "Task 2", isCompleted: false },
          { id: "3", title: "Task 3", isCompleted: false },
        ],
      },
    };
    store = configureStore({
      reducer: { todoData: todoReducer },
      preloadedState: initialState,
    });

    const sourceIndex = 0;
    const destinationIndex = 2;
    const reorderedItem = initialState.todoData.list[sourceIndex];
    store.dispatch(reorderItems({ sourceIndex, destinationIndex }));
    const state = store.getState().todoData;
    expect(state.list[destinationIndex]).toEqual(reorderedItem);
  });
});

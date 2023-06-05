import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { FILTER_NAMES } from "constants/filter-names.const";
import { LocalStorageService } from "services/local-storage.service";

const initialState = {
  filter: FILTER_NAMES.ALL,
  list: [],
};

export const sliceName = "todoData";

const getInitialState = () => {
  const storedState = LocalStorageService.getData(sliceName);
  if (storedState) {
    return JSON.parse(storedState).todoData;
  }

  return initialState;
};

const todoSlice = createSlice({
  name: sliceName,
  initialState: getInitialState(),
  reducers: {
    addItem: (state, action) => {
      state.list.push({
        id: uuid(),
        title: action.payload.title,
        isCompleted: action.payload.isCompleted,
      });
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    checkItem: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? { ...item, isCompleted: action.payload.isCompleted }
          : item
      );
    },
    removeCompletedItems: (state) => {
      state.list = state.list.filter((item) => !item.isCompleted);
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    reorderItems: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const sourceItem = state.list[sourceIndex];
      state.list.splice(sourceIndex, 1);
      state.list.splice(destinationIndex, 0, sourceItem);
    },
  },
});

export const {
  addItem,
  removeItem,
  checkItem,
  removeCompletedItems,
  setFilter,
  reorderItems,
} = todoSlice.actions;

export const todoDataSelector = (state) => state.todoData;
export const todoReducer = todoSlice.reducer;

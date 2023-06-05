import React from "react";
import { MainLayout } from "components/layouts/index";
import TodoHeader from "./components/todo-header/todo-header";
import TodoBody from "./components/todo-body/todo-body";
import TodoFooter from "./components/todo-footer/todo-footer";

export const TodoListPage = () => {
  return (
    <MainLayout header={TodoHeader()} footer={TodoFooter()}>
      <TodoBody />
    </MainLayout>
  );
};

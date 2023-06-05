import TodoInput from "./todo-input/todo-input";
import TodoList from "./todo-list/todo-list";
import css from "./todo-body.module.css";

const TodoBody = () => {
  return (
    <div className={css.container}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoBody;

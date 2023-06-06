import { useDispatch } from "react-redux";
import { Checkbox, TextInput, Card } from "components/shared/index";
import css from "./todo-input.module.css";
import { useState } from "react";
import { addItem } from "store/slices/todo.slice";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

const TodoInput = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onCheckboxChangeHandler = (event) => {
    setIsCompleted(event.target.checked);
  };

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    dispatch(addItem({ isCompleted: isCompleted, title: title }));
    setTitle("");
    setIsCompleted(false);
  };

  return (
    <Card>
      <form
        className={css.todoInputForm}
        onSubmit={onSubmitHandler}
        data-testid={DATA_TEST_IDS.FORM}
      >
        <div className={css.checkboxContainer}>
          <Checkbox
            checked={isCompleted}
            onChangeHandler={onCheckboxChangeHandler}
          />
        </div>

        <div className={css.titleContainer}>
          <TextInput text={title} onChangeHandler={onTitleChangeHandler} />
        </div>
      </form>
    </Card>
  );
};

export default TodoInput;

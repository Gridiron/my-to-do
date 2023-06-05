import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/shared/button/button";
import { Card } from "components/shared/card/card";
import { Text } from "components/shared/text/text";
import { TEXT_TYPE } from "constants/text-type.const";
import {
  removeCompletedItems,
  setFilter,
  todoDataSelector,
} from "store/slices/todo.slice";
import { FILTER_NAMES } from "constants/filter-names.const";
import css from "./todo-footer.module.css";

const TodoFooter = () => {
  const todoData = useSelector(todoDataSelector);
  const dispatch = useDispatch();
  const clearCompletedHandler = () => {
    dispatch(removeCompletedItems());
  };

  const setFilterHandler = (filter) => {
    if (todoData.filter !== filter) {
      dispatch(setFilter({ filter: filter }));
    }
  };

  return (
    <div>
      <Card>
        <div className={css.toolbar}>
          <div className={css.counterContainer}>
            <Text type={TEXT_TYPE.SECONDARY}>
              {todoData.list.filter((item) => !item.isCompleted).length} items
              left
            </Text>
          </div>
          <div className={css.filterButtonsContainer}>
            <Button
              isActive={todoData.filter === FILTER_NAMES.ALL}
              onClick={() => setFilterHandler(FILTER_NAMES.ALL)}
            >
              <Text>All</Text>
            </Button>
            <Button
              isActive={todoData.filter === FILTER_NAMES.COMPLETED}
              onClick={() => setFilterHandler(FILTER_NAMES.COMPLETED)}
            >
              <Text>Completed</Text>
            </Button>
            <Button
              isActive={todoData.filter === FILTER_NAMES.ACTIVE}
              onClick={() => setFilterHandler(FILTER_NAMES.ACTIVE)}
            >
              <Text>Active</Text>
            </Button>
          </div>
          <div className={css.clearCompletedContainer}>
            <Button onClick={() => clearCompletedHandler()}>
              <Text>Clear completed</Text>
            </Button>
          </div>
        </div>
      </Card>

      <Text type={TEXT_TYPE.SECONDARY}>Drag and drop to reorder</Text>
    </div>
  );
};

export default TodoFooter;

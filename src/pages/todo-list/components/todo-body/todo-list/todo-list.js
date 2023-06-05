import { Checkbox, Text, Button, Card } from "components/shared/index";
import { FaTimes } from "react-icons/fa";
import css from "./todo-list.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  todoDataSelector,
  checkItem,
  removeItem,
  reorderItems,
} from "store/slices/todo.slice";
import { TEXT_TYPE } from "constants/text-type.const";
import { FILTER_NAMES } from "constants/filter-names.const";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoData = useSelector(todoDataSelector);
  const checkItemHandler = (id, isCompleted) => {
    dispatch(checkItem({ id: id, isCompleted: isCompleted }));
  };

  const removeItemHandler = (id) => {
    dispatch(removeItem({ id: id }));
  };

  const itemFiltration = (item) => {
    if (todoData.filter === FILTER_NAMES.ALL) {
      return true;
    }

    if (todoData.filter === FILTER_NAMES.ACTIVE) {
      return !item.isCompleted;
    }

    return item.isCompleted;
  };

  const onDragEndHandler = (result) => {
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    dispatch(
      reorderItems({
        sourceIndex: sourceIndex,
        destinationIndex: destinationIndex,
      })
    );
  };

  if (todoData.list.length === 0) {
    return <></>;
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <ul
            className={css.list}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoData.list
              .filter((item) => itemFiltration(item))
              .map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={todoData.filter !== FILTER_NAMES.ALL}
                >
                  {(provided) => (
                    <li
                      key={item.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card>
                        <div className={css.listItem}>
                          <div className={css.checkboxContainer}>
                            <Checkbox
                              checked={item.isCompleted}
                              onChangeHandler={(event) =>
                                checkItemHandler(item.id, event.target.checked)
                              }
                            />
                          </div>
                          <div className={css.titleContainer}>
                            <Text
                              type={TEXT_TYPE.PRIMARY}
                              crossed={item.isCompleted}
                            >
                              {item.title}
                            </Text>
                          </div>
                          <div className={css.removeButtonContainer}>
                            <Button
                              icon={<FaTimes />}
                              onClick={() => removeItemHandler(item.id)}
                            />
                          </div>
                        </div>
                      </Card>
                    </li>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;

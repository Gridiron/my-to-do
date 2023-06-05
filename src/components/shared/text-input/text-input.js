import PropTypes from "prop-types";
import css from "./text-input.module.css";

export const TextInput = ({ text, onChangeHandler }) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Enter title for you todo"
      value={text}
      onChange={onChangeHandler}
    />
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

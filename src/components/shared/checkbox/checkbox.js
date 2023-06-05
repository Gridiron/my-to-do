import PropTypes from "prop-types";
import css from "./checkbox.module.css";

export const Checkbox = ({ checked, onChangeHandler }) => {
  return (
    <div className={css.customCheckbox}>
      <label className={css.label}>
        <input
          className={css.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
        />
        <span className={css.checkMark}></span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import css from "./checkbox.module.css";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

export const Checkbox = ({ checked, onChangeHandler }) => {
  return (
    <div className={css.customCheckbox}>
      <label className={css.label} data-testid={DATA_TEST_IDS.CHECKBOX_LABEL}>
        <input
          data-testid={DATA_TEST_IDS.CHECKBOX}
          className={css.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
        />
        <span
          className={css.checkMark}
          data-testid={DATA_TEST_IDS.CHECKMARK}
        ></span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import css from "./button.module.css";
import classNames from "classnames";
import { DATA_TEST_IDS } from "constants/data-test-ids.const.js";

export const Button = ({ onClick, children, icon, isActive }) => {
  const handleOnClick = () => onClick();
  const classes = classNames(
    css.textButton,
    isActive ? css.active : css.notActive
  );

  return (
    <button
      className={css.button}
      onClick={handleOnClick}
      data-testid={DATA_TEST_IDS.BUTTON}
    >
      {icon && <i className={css.icon}>{icon}</i>}
      {children && <span className={classes}>{children}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  isActive: PropTypes.bool,
};

import PropTypes from "prop-types";
import css from "./text.module.css";
import classNames from "classnames";
import { TEXT_TYPE } from "constants/text-type.const";

export const Text = ({ children, type, crossed }) => {
  const classes = classNames(crossed ? css.crossed : css.notCrossed, css[type]);

  return <div className={classes}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TEXT_TYPE.PRIMARY, TEXT_TYPE.SECONDARY]),
  onChangeHandler: PropTypes.func.isRequired,
  crossed: PropTypes.bool,
};

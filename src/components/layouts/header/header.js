import PropTypes from "prop-types";
import css from "./header.module.css";

export const Header = ({ children }) => {
  return <div className={css.header}>{children}</div>;
};

Header.propTypes = {
  children: PropTypes.node,
};

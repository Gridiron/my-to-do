import PropTypes from "prop-types";

import css from "./body.module.css";

export const Body = ({ children }) => (
  <div className={css.body}>{children}</div>
);

Body.propTypes = {
  children: PropTypes.node,
};

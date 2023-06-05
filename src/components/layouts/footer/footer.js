import PropTypes from "prop-types";

import css from "./footer.module.css";

export const Footer = ({ children }) => (
  <div className={css.footer}>{children}</div>
);

Footer.propTypes = {
  children: PropTypes.node,
};

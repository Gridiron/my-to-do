import PropTypes from "prop-types";
import css from "./card.module.css";

export const Card = ({ children }) => {
  return <div className={css.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import css from "./card.module.css";
import { DATA_TEST_IDS } from "constants/data-test-ids.const";

export const Card = ({ children }) => {
  return (
    <div className={css.card} data-testid={DATA_TEST_IDS.CARD}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import { Footer, Body, Header } from "../index";
import css from "./main-layout.module.css";

export const MainLayout = ({ header, children, footer }) => {
  return (
    <>
      <div className={css.backgroundTop}></div>
      <div className={css.backgroundBottom}></div>

      <div className={css.foreground}>
        <Header>{header}</Header>
        <Body>{children}</Body>
        <Footer>{footer}</Footer>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

import React from "react";
import { Link } from "react-router-dom";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

export const Logo = (props) => (
  <Link to="/">
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  </Link>
);

import React from "react";

import classes from "./DrawerToogle.css";

export const DrawerToogle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

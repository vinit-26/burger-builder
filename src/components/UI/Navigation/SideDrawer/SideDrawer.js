import React from "react";

import { Logo } from "../../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { Backdrop } from "../../Backdrop/Backdrop";
import { Aux } from "../../../../hoc/Auxiliary";
import classes from "./SideDrawer.css";

export const SideDrawer = (props) => {
  const attechedClass = [classes.SideDrawer, classes.Closed];
  if (props.openDrawer) {
    attechedClass[1] = classes.Open;
  }
  return (
    <Aux>
      <Backdrop show={props.openDrawer} clicked={props.closeDrawer} />
      <div className={attechedClass.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

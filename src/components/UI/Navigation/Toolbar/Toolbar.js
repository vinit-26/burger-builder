import React from "react";

import classes from "./Toolbar.css";
import { Logo } from "../../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToogle } from "../SideDrawer/DrawerToogle/DrawerToogle";

export const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <DrawerToogle clicked={props.drawerToogleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

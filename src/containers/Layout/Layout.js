import React, { Component } from "react";

import { SideDrawer } from "../../components/UI/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";
import { Aux } from "../../hoc/Auxiliary";
import { Toolbar } from "../../components/UI/Navigation/Toolbar/Toolbar";

export class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  drawerToogleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <SideDrawer
          openDrawer={this.state.showSideDrawer}
          closeDrawer={this.sideDrawerCloseHandler}
        />
        <Toolbar drawerToogleClicked={this.drawerToogleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

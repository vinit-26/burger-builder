import React from "react";

import classes from "./CheckoutSummary.css";
import { Button } from "../../UI/Button/Button";
import { Burger } from "../../Burger/Burger";

const CheckoutSummary = (props) => {
  const style = {
    width: "100%",
    margin: "auto",
  };
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tests well.!</h1>
      <div style={style}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;

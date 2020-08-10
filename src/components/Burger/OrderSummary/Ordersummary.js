import React from "react";

import { Aux } from "../../../hoc/Auxiliary";
import { Button } from "../../UI/Button/Button";

export const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}:</span>
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Delicious Burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price:&nbsp;{props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

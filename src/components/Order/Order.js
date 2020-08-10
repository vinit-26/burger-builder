import React from "react";

import classes from "./Order.css";

export const Order = (props) => {
  const ingredients = [];
  for (let igName in props.ingredients) {
    ingredients.push({ name: igName, amount: props.ingredients[igName] });
  }
  const igOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          border: "1px solid #eee",
          margin: "0 8px",
          display: "inline-block",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {igOutput}</p>
      <p>Price: {props.price}$</p>
    </div>
  );
};

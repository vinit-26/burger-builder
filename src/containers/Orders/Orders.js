import React, { Component } from "react";

import { withError } from "../../hoc/WithError/WithError";
import { Order } from "../../components/Order/Order";
import axios from "../../axios-order";
import { Spiner } from "../../components/UI/Spiner/Spiner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    let orderSummary;
    if (this.state.loading) {
      orderSummary = <Spiner />;
    } else {
      orderSummary = this.state.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        );
      });
    }

    return <div>{orderSummary}</div>;
  }
}

export default withError(Orders, axios);

import React, { Component } from "react";

import { Button } from "../../../components/UI/Button/Button";
import axios from "../../../axios-order";
import { Spiner } from "../../../components/UI/Spiner/Spiner";
import classes from "./ContactData.css";
import { Input } from "../../../components/UI/Input/Input";

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Name",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
      },
      countary: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
            { value: "", displayValue: "Select Delivery Method" },
          ],
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
        },
      },
    },
    formIsValid: false,
    totalPrice: 0,
    loading: false,
  };
  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElIdnty in this.state.orderForm) {
      formData[formElIdnty] = this.state.orderForm[formElIdnty].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      userData: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  propertyChangedHandler = (event, elIdentifyer) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormEl = { ...updatedOrderForm[elIdentifyer] };
    updatedFormEl.value = event.target.value;
    updatedFormEl.valid = this.checkValidity(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedFormEl.touched = true;
    updatedOrderForm[elIdentifyer] = updatedFormEl;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    const inputElmnt = formElementsArray.map((formElement) => {
      return (
        <Input
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          label={formElement.id}
          key={formElement.id}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          changed={(event) =>
            this.propertyChangedHandler(event, formElement.id)
          }
        />
      );
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {inputElmnt}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spiner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Details.</h4>
        {form}
      </div>
    );
  }
}

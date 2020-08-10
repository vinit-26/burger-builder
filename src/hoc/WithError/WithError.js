import React, { Component } from "react";

import { Aux } from "../Auxiliary";
import { Modal } from "../../components/UI/Modal/Modal";

export const withError = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterseptor = axios.interceptors.response.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterseptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterseptor);
      axios.interceptors.response.eject(this.resInterseptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            <h4>{this.state.error ? this.state.error.message : null}</h4>
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

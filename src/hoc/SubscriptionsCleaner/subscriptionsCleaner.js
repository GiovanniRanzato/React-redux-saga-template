import React, { Component } from "react";
import { RANDOM_USER_API } from "./Constants";
import axios from "axios";

class subscriptionsCleaner extends Component {
  state = {
    user: null
  };

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  abortController = new AbortController();
  fetchUser = async () => {
    try {
      let result = await axios.get(RANDOM_USER_API, {
        cancelToken: this.source.token
      });
      return result.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
        throw new Error("Cancelled");
      }
    }
  };

  componentDidMount() {
    this.fetchUser()
      .then(data =>
        this.setState({
          user: data
        })
      )
      .catch(err => {
        console.log("Cancelled");
      });
  }

  componentWillUnmount() {
    this.source.cancel("Operation canceled by the user.");
  }
}
export default subscriptionsCleaner;

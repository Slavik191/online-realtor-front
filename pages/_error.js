import React from "react";

export default class Error extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <React.Fragment>
        <p>Page not found!</p>
      </React.Fragment>
    );
  }
}
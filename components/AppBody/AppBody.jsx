import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

class AppBody extends Component {
  render() {
    const { route, children, ...rest } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { route, ...rest })
    );
    return (
      <>
        <CssBaseline />
        {childrenWithProps}
      </>
    );
  }
}

export default AppBody;
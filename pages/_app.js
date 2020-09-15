import React from "react";
import App from "next/app";
import { ThemeProvider } from '@material-ui/core/styles'
// import { SnackbarProvider } from 'notistack';

import theme from '../config/theme';

import UserContext from "../components/context/UserContext";
import AppBody from "../components/AppBody/AppBody";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* <SnackbarProvider hideIconVariant maxSnack={3}> */}
          <UserContext>
            <AppBody route={this.props.router}>
              <Component {...pageProps} router={router} />
            </AppBody>
          </UserContext>
        {/* </SnackbarProvider> */}
      </ThemeProvider>
    );
  }
}

export default MyApp;
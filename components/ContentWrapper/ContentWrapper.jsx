import React from "react";
import Container from "@material-ui/core/Container";

import { useStyles } from "./ContentWrapperStyle"

const ContentWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.content}>
      {children}
    </Container>
  );
}

export default ContentWrapper;
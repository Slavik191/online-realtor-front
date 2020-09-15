import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useStyles } from "./GridWrapperStyle";

const GridWrapper = ({ children }) => {
  const classes = useStyles();
  
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(
      <Grid item lg={4} md={6} sm={12}>
        {child}
      </Grid>
    )
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {childrenWithProps}
      </Grid>
    </div>
  );
}

export default GridWrapper;
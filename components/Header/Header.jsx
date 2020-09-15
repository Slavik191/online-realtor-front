import React, { useState, useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { toCabinet } from "../../utils/routesUtil";

import { Context } from "../context/UserContext";

import { useStyles } from "./HeaderStyle";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import SignIn from "../SignIn/SignIn";

export default function ClippedDrawer() {
  const classes = useStyles();

  const { user, signUp } = useContext(Context);

  console.log(user)

  const [showPopUp, setShowPopUp] = useState(false);

  const openPopUp = () => setShowPopUp(true);

  const closePopUp = () => setShowPopUp(false);

  const cabinet = () => {
    toCabinet(user.role);
  }

  const getButtons = () => {
    if(!user){
      return(
        <Button onClick={openPopUp} variant="outlined" color="primary">
          войти
        </Button>
      );
    } else {
      return(
        <div className={classes.buttons}>
          <Button onClick={cabinet} variant="outlined" color="primary">
            кабинет
          </Button>
          <Button onClick={signUp} variant="outlined" color="primary">
            выйти
          </Button>
        </div>
      );
    }
  }

  return (
    <>
      <AppBar position="relative" className={classes.wrapper}>
        <Toolbar className={classes.toolbar}>
          <ContentWrapper>
            <div className={classes.content}>
              <Typography variant="h6" noWrap>
                Realtor
              </Typography>
              <img className={classes.logo} src="https://lh3.googleusercontent.com/proxy/dDxf-23P2uHWtqtJEznp7pogNtYfb0K9E3AddQ3LP0iYL85TJI_9ydoXW1oALKDDMMjFdKJqt5ekG6drVl7nXWYpKoOc030Ve61cBAlpt_dUGZNLJUifI41okZSiE2Vl66F2nhWnYUw_39p72uI31k4" />
              {getButtons()}
            </div>
          </ContentWrapper>
        </Toolbar>
      </AppBar>
      <SignIn 
        open={showPopUp}
        handleClose={closePopUp}
      />
    </>
  );
}
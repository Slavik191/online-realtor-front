import React, { useContext, useRef } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ApiServices from "../../services/ApiServices";

import { Context } from "../context/UserContext";

const SignIn = ({ open, handleClose }) => {
  const { signIn } = useContext(Context);  
  
  const email = useRef('');
  const password = useRef('');

  const submit = async () => {
    try {
      const result = await ApiServices.auth(
        email.current.value,
        password.current.value
      );

      signIn(result);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="e-mail"
            type="email"
            defaultValue="admin@mail.ru"
            inputRef={email}
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="пароль"
            type="password"
            defaultValue="a-123456Z"
            inputRef={password}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
          <Button onClick={submit} color="primary">
            Войти
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignIn;
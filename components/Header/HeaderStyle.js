import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    color: "#172340 !important"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    height: "70px"
  },
  buttons: {
    display: "flex",

    "&>button:not(:first-child)": {
      marginLeft: "20px"
    }
  }
}));
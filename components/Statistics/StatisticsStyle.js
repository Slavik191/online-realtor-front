import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formControl: {
    minWidth: "100px"
  },
  title: {
    marginBottom: "30px",
    fontSize: "25px",
    fontWeight: 600
  }
}));
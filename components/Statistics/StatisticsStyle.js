import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  formControl: {
    minWidth: "100px"
  },
  title: {
    fontSize: "25px",
    fontWeight: 600
  }
}));
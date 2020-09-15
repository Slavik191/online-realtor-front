import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 999
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0"
  },
  description: {
    margin: "20px 0 0 0"
  },
  address: {
    margin: "20px 0 0 0"
  }
}));
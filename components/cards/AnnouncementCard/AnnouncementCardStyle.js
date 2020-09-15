import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  media: {
    height: 240,
  },
  content: {
    flex: 1
  }
});
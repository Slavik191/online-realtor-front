import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "./AnnouncementCardStyle"

const AnnouncementCard = ({ data, setSelectAnnouncement }) => {
  const classes = useStyles();

  const { photo, properti } = data;

  const setAnnouncement = () => setSelectAnnouncement(data);

  return (
    <Card className={classes.wrapper}>
      <CardMedia
        className={classes.media}
        image={photo[0]}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {properti.city}, {properti.street}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {properti.description.slice(0, 120)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small" 
          color="primary"
          onClick={setAnnouncement}
        >
          подробнее
        </Button>
      </CardActions>
    </Card>
  );
}

export default AnnouncementCard;
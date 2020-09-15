import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import { useStyles } from "./AnnouncementInfoStyle";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ImagesSlider from "../ImagesSlider/ImagesSlider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AnnouncementInfo = ({ data, open, closeDialog }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog fullScreen open={open} onClose={closeDialog} TransitionComponent={Transition}>
        <IconButton className={classes.close} edge="start" color="primary" onClick={closeDialog} aria-label="close">
          <CloseIcon />
        </IconButton>
        {data && (
          <ContentWrapper>
            <div className={classes.content}>
              {data.photo.length && <ImagesSlider images={data.photo} />}
              <Typography className={classes.description} component={"p"}>
                {data.properti.description}
              </Typography>
              <div className={classes.address}>
                <Typography component={"p"}>
                  Город: {data.properti.city}
                </Typography>
                <Typography component={"p"}>
                  Улица: {data.properti.street}
                </Typography>
                <Typography component={"p"}>
                  Дом: {data.properti.house}
                </Typography>
                <Typography component={"p"}>
                  этаж: {data.properti.floor}
                </Typography>
                <Typography component={"p"}>
                  квартира: {data.properti.rooms}
                </Typography>
              </div>
              <div className={classes.address}>
                <Typography component={"p"}>
                  Телефон Риэлтора: {data.Phone} ({data.name})
              </Typography>
              </div>
            </div>
          </ContentWrapper>
        )}
      </Dialog>
    </div>
  );
}

export default AnnouncementInfo;
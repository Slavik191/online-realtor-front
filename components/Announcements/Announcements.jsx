import React, { useState } from "react";

import GridWrapper from "../GridWrapper/GridWrapper";
import AnnouncementCard from "../cards/AnnouncementCard/AnnouncementCard";
import AnnouncementInfo from "../AnnouncementInfo/AnnouncementInfo";

const Announcements = ({ announcements = [] }) => {
  let [selectAnnouncement, setSelectAnnouncement] = useState(null);

  const closeDialog = () => setSelectAnnouncement(null);

  return (
    <>
      <GridWrapper>
        {announcements.map(announcement => (
          <AnnouncementCard 
            key={announcement.properti.ID} 
            data={announcement}
            setSelectAnnouncement={setSelectAnnouncement}
          />
        ))}
      </GridWrapper>
      <AnnouncementInfo 
        open={selectAnnouncement ? true : false} 
        data={selectAnnouncement}
        closeDialog={closeDialog}
      />
    </>
  )
};

export default Announcements;
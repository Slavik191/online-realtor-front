import React, { useState, useContext } from "react";

import ApiServices from "../../services/ApiServices";

import { Context } from "../context/UserContext";

import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import Announcements from "../Announcements/Announcements";
import Statistics from "../Statistics/Statistics";

const AdminPanel = () => {
  const [selectItem, setSelectItem] = useState(1); 
  const { user } = useContext(Context);

  const { data: announcements } = ApiServices.announcements();
  const { data: newAnnouncements } = ApiServices.newAnnouncements(
    user.tokenType ,
    user.token
  );

  const menu = [
    {
      id: 1,
      name: "Объявления",
      onClick: () => setSelectItem(1)
    },
    {
      id: 2,
      name: "Новые объявления",
      onClick: () => setSelectItem(2)
    },
    {
      id: 3,
      name: "статистика",
      onClick: () => setSelectItem(3)
    }
  ];

  return (
    <ResponsiveDrawer menu={menu}>
      {(selectItem === 1 || selectItem === 2) && (
        <Announcements 
          announcements={selectItem === 1 ? announcements : newAnnouncements} 
          adminButtons={selectItem === 2}
        />
      )}
      {selectItem === 3 && (
        <Statistics />
      )} 
    </ResponsiveDrawer>
  );
}

export default AdminPanel;
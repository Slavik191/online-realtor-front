import React, { useEffect, useContext } from "react";
import Head from "next/head";

import AdminPanel from "../components/AdminPanel/AdminPanel";
// import middleware from '../lib/middleware'

// import { Context } from "../components/context/UserContext";
// import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
// import HistoryTable from "../components/HistoryTable/HistoryTable";
// import AuthorizationSection from "../components/AuthorizationSection/AuthorizationSection";
// import ButtonHelp from "../components/buttons/ButtonHelp/ButtonHelp";


const Admin = ({ userInfo }) => {
  // const { user, setUser } = useContext(Context);

  // useEffect(() => {
  //   if (userInfo) setUser(userInfo);
  // }, []);

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminPanel />
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   await middleware.apply(req, res);
//   let userInfo = req.user ? req.user : null;
//   return { props: { userInfo } }
// }

export default Admin;
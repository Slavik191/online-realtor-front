import React, { useEffect, useContext } from "react";
import Head from "next/head";

import RealtorPanel from "../components/RealtorPanel/RealtorPanel";
// import middleware from '../lib/middleware'

// import { Context } from "../components/context/UserContext";
// import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
// import HistoryTable from "../components/HistoryTable/HistoryTable";
// import AuthorizationSection from "../components/AuthorizationSection/AuthorizationSection";
// import ButtonHelp from "../components/buttons/ButtonHelp/ButtonHelp";


const Realtor = ({ userInfo }) => {
  // const { user, setUser } = useContext(Context);

  // useEffect(() => {
  //   if (userInfo) setUser(userInfo);
  // }, []);

  return (
    <>
      <Head>
        <title>Realtor</title>
      </Head>
      <RealtorPanel />
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   await middleware.apply(req, res);
//   let userInfo = req.user ? req.user : null;
//   return { props: { userInfo } }
// }

export default Realtor;
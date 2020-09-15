import React, { useEffect, useContext } from "react";
import Head from "next/head";

import ApiServices from "../services/ApiServices";

import Header from "../components/Header/Header";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Announcements from "../components/Announcements/Announcements";

// import middleware from '../lib/middleware'

// import { Context } from "../components/context/UserContext";
// import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
// import HistoryTable from "../components/HistoryTable/HistoryTable";
// import AuthorizationSection from "../components/AuthorizationSection/AuthorizationSection";
// import ButtonHelp from "../components/buttons/ButtonHelp/ButtonHelp";


const Index = ({ userInfo }) => {
  // const { user, setUser } = useContext(Context);

  // useEffect(() => {
  //   if (userInfo) setUser(userInfo);
  // }, []);

  const { data } = ApiServices.announcements();

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      <main style={{ padding: "30px 0" }}>
        <ContentWrapper>
          <Announcements announcements={data} />
        </ContentWrapper>
      </main>
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   await middleware.apply(req, res);
//   let userInfo = req.user ? req.user : null;
//   return { props: { userInfo } }
// }

export default Index;
import React, { useEffect, useContext } from "react";
import Head from "next/head";

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

  let data = [
    {
      "photo": [
        "https://1house.by/wp-content/uploads/2019/01/6-konechn.jpg",
        "https://1house.by/wp-content/uploads/2019/01/6-konechn.jpg",
        "https://1house.by/wp-content/uploads/2019/01/6-konechn.jpg"
      ],
      "properti": {
        "ID": 19,
        "contractID": 11,
        "city": "Минск",
        "street": "Сурганова",
        "house": "45",
        "apartm": 345,
        "floor": 3,
        "rooms": 2,
        "balcony": 1,
        "area": 80.0,
        "description": "Для строителей, рабочих. Сдам на длительный срок 3-х комнатную квартиру, г. Минск, ул. Слободская, дом 135-1, р-н Малиновка 8/12 этажного панельного дома, мебель, сан/узел - раздельный, ремонт - отличный ремонт, электрическая плита, площадь 63.1/63.1/ кв.м., балкон застекленный, домофон, металлическая дверь, лифт, парковка, хороший вид из окна, детская площадка, рядом магазин, рядом супермаркет, рядом гипермаркет, рядом рынок. Для проживания строительных бригад. Отопление, горячая и холодная вода, интернет wifi,чайник,микроволновая печь,холодильник,кровати 8 шт.,подушка,одеяло (постельное белье)уборщица 2-3 раза в неделю,постельное белье сдается в химчистку. Одноуровневые кровати. На длительный срок аренды (от месяца).Рядом остановка,автобуса. Коммунальные входят в стоимость. 10 рублей с человека в день Минск, Слободская улица",
        "AdmChek": 1
      },
      "name": "Патрик",
      "Phone": "+375336548711"
    },
    {
      "photo": [
        "https://spot.by/NewsImages/5_2.jpg",
      ],
      "properti": {
        "ID": 22,
        "contractID": 12,
        "city": "Минск",
        "street": "Независимости",
        "house": "145",
        "apartm": 32,
        "floor": 2,
        "rooms": 1,
        "balcony": 1,
        "area": 50.0,
        "description": "Просторная однокомнатная квартира на первом этаже. Есть собственный тамбур - он только на одну квартиру. Можно оставлять там коляски, велосипеды и прочие вещи. С кухни есть выход на лоджию. Санузел просторный, совмещенный. Есть ванна. Много спальных мест - удобная двуспальная кровать, раскладной диван. Места для хранения - шкафы, комод, тумба.",
        "AdmChek": 1
      },
      "name": "Иван",
      "Phone": "+375331234567"
    },
    {
      "photo": [
        "https://spot.by/NewsImages/5_2.jpg",
      ],
      "properti": {
        "ID": 21,
        "contractID": 12,
        "city": "Минск",
        "street": "Независимости",
        "house": "145",
        "apartm": 32,
        "floor": 2,
        "rooms": 1,
        "balcony": 1,
        "area": 50.0,
        "description": "Просторная однокомнатная квартира на первом этаже. Есть собственный тамбур - он только на одну квартиру. Можно оставлять там коляски, велосипеды и прочие вещи. С кухни есть выход на лоджию. Санузел просторный, совмещенный. Есть ванна. Много спальных мест - удобная двуспальная кровать, раскладной диван. Места для хранения - шкафы, комод, тумба.",
        "AdmChek": 1
      },
      "name": "Иван",
      "Phone": "+375331234567"
    },
    {
      "photo": [
        "https://spot.by/NewsImages/5_2.jpg",
      ],
      "properti": {
        "ID": 25,
        "contractID": 12,
        "city": "Минск",
        "street": "Независимости",
        "house": "145",
        "apartm": 32,
        "floor": 2,
        "rooms": 1,
        "balcony": 1,
        "area": 50.0,
        "description": "Просторная однокомнатная квартира на первом этаже. Есть собственный тамбур - он только на одну квартиру. Можно оставлять там коляски, велосипеды и прочие вещи. С кухни есть выход на лоджию. Санузел просторный, совмещенный. Есть ванна. Много спальных мест - удобная двуспальная кровать, раскладной диван. Места для хранения - шкафы, комод, тумба.",
        "AdmChek": 1
      },
      "name": "Иван",
      "Phone": "+375331234567"
    }
  ]

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
import React, { useEffect, useState, useContext } from "react";

import Typography from '@material-ui/core/Typography';

import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

import ApiServices from "../../services/ApiServices";

import { Context } from "../context/UserContext";

import { useStyles } from "./StatisticsStyle";

const Statistics = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const { user } = useContext(Context);

  const { data } = ApiServices.statistics(
    user.tokenType,
    user.token
  );

  const getWidth = () => {
    const main = document.getElementById("toolbar");
    const width = main.offsetWidth;
    setWidth(width);
  }

  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    }
  }, []);

  if(!data) return null;

  return (
    <>
      <Typography className={classes.title} component={"p"}>
        сумма: {data.AllMoney}
      </Typography>
      <LineChart width={width} height={500} data={data.ListGraf}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="money" stroke="#8884d8" />
      </LineChart>
    </>
  )
}

export default Statistics;
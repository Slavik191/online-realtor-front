import React, { useEffect, useState, useContext } from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

import ApiServices from "../../services/ApiServices";

import { Context } from "../context/UserContext";

import { useStyles } from "./StatisticsStyle";

const Statistics = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const [month, setMonth] = React.useState("1");
  const { user } = useContext(Context);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const { data } = ApiServices.statistics(
    user.tokenType,
    user.token,
    month
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
      <div className={classes.row}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">месяц</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={month}
            onChange={handleChange}
            label="month"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Январь</MenuItem>
            <MenuItem value={2}>Февраль</MenuItem>
            <MenuItem value={3}>Март</MenuItem>
            <MenuItem value={4}>Апрель</MenuItem>
            <MenuItem value={5}>Май</MenuItem>
            <MenuItem value={6}>Июнь</MenuItem>
            <MenuItem value={7}>Июль</MenuItem>
            <MenuItem value={8}>Август</MenuItem>
            <MenuItem value={9}>Сентябрь</MenuItem>
            <MenuItem value={10}>Октябрь</MenuItem>
            <MenuItem value={11}>Ноябрь</MenuItem>
            <MenuItem value={12}>Декабрь</MenuItem>
          </Select>
        </FormControl>
        <Typography className={classes.title} component={"p"}>
          сумма: {data.AllMoney}
        </Typography>
      </div>
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
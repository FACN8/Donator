import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import './style.css'
import {
  Tooltip,
  Area,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import Typography from "@material-ui/core/Typography";
// import Title from './Title';

// Generate Sales Data
function createData(donations, donationsByMonth) {
  return { donations, donationsByMonth };
}

const data = [
  createData(0, 0),
  createData(5, 1),
  createData(10, 3),
  createData(15, 10),
  createData(20, 4),
  createData(25, 0),
  createData(30, 6),
];

export default function Chart({filterMonth}) {
  const theme = useTheme();
  return (
    <Paper className="chart">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {filterMonth[1]}
      </Typography>

      <ResponsiveContainer width={800} height={350}>
      <AreaChart data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="donations" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="donationsByMonth" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}

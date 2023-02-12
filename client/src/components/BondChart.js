import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '2015', bondValue: 2400, pv: 2400 },
  { name: '2016', bondValue: 3800, pv: 2210 },
  { name: '2017', bondValue: 4800, pv: 2290 },
  { name: '2018', bondValue: 5000, pv: 2000 },
  { name: '2019', bondValue: 5800, pv: 2181 },
  { name: '2020', bondValue: 4800, pv: 2500 },
  { name: '2021', bondValue: 9600, pv: 2100 },
  { name: '2022', bondValue: 9800, pv: 2100 },
];

const BondChart = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="bondValue" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default BondChart;

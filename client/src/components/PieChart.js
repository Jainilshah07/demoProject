import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Bond A', value: 400 },
  { name: 'Bond B', value: 300 },
  { name: 'Bond C', value: 300 },
  { name: 'Bond D', value: 200 },
  { name: 'Bond E', value: 278 },
  { name: 'Bond F', value: 189 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const BondPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default BondPieChart;

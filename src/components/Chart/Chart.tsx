'use client';
import { FC } from 'react';
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { ChartProps } from '@entities/Form';

const Chart: FC<ChartProps> = ({ data = [], xLabel, xKey, yLabel, yKey }) => (
  <ResponsiveContainer width="99%" height={400}>
    <LineChart
      width={900}
      height={550}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 55,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey}>
        <Label value={xLabel} offset={-5} position="insideBottom" />
      </XAxis>
      <YAxis
        dataKey={yKey}
        label={{ value: `${yLabel}`, angle: -90, position: 'insideLeft', offset: -50 }}
      />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey={yKey} stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;

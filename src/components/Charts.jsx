import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Revenue By November 2019 (mm)',
    },
  ],
  width: 400,
  height: 350,
};
const dataset = [
  {
    jobType:'service plumbing',
    RevenueByJob:200000,
    RevenueByLocn: 81000,
    place: 'Kolkata',
  },
  {
    jobType:'bid work',
    RevenueByJob:130000,
    RevenueByLocn: 61000,
    place: 'Delhi',
  },{
    jobType:' Service HVAC',
    RevenueByJob:100000,
    RevenueByLocn: 41000,
    place: 'Bhubaneswar',
  },{
    jobType:'SWE',
    RevenueByJob:85000,
    RevenueByLocn: 31000,
    place: 'Bangalore',
  },{
    jobType:' Cloud Engineer',
    RevenueByJob:70000,
    RevenueByLocn: 21000,
    place: 'Goa',
  },{
    jobType:'sales',
    RevenueByJob:59000,
    RevenueByLocn: 11000,
    place: 'Ranchi',
  },
];

const valueFormatter = (value) => `${value}mm`;

export  function GridDemo1() {
  return (
    <BarChart className='bg-white'
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'place' }]}
      series={[{ dataKey: 'RevenueByLocn', label: 'Revenue By Job Location', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
export  function GridDemo2() {
    return (
      <BarChart className='bg-white'
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'jobType' }]}
        series={[{ dataKey: 'RevenueByJob', label: 'Revenue By Job Type', valueFormatter }]}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
      />
    );
  }
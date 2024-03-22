
import React from 'react';

import {GridDemo1 ,GridDemo2} from  './Charts';

const CompanyMetrics = () => {
  const metricsData = [
    { value: '$406,411.29', label: 'Total Revenue', color: 'text-green-500' },
    { value: '$620', label: 'Total Jobs Avg' },
    { value: '655', label: 'Tickets Created' },
    { value: '735', label: 'Tickets Scheduled' },
    { value: '$110,448.8', label: 'Outstanding Amount', color: 'text-red-500' },
    { value: '105', label: 'Memberships Sold' },
    { value: '436', label: 'Jobs Completed' },
    { value: '65', label: 'Total Canceled' },
  ];

  return (<>    <div className="container mx-auto px-4 py-8 bg-gray-300 h-screen ">
      <h2 className="text-2xl font-bold mb-4">Company Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {metricsData.map((metric, index) => (
          <div key={index} className="bg-white  shadow-md p-4 flex items-center border-l-8 border-green-500">
            <div className="ml-4">
              <p className={`text-xl font-semibold ${metric.color}`}>{metric.value}</p>
              <p className="text-gray-900 font-semibold">{metric.label}</p>
            </div>
          </div>
        ))}
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 "'>
         <GridDemo1/>
      <GridDemo2/>
      </div>
     
    </div>
     
</>
  );
};

export default CompanyMetrics;

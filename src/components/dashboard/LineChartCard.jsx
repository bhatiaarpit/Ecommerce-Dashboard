import React from 'react';

const LineChartCard = () => (
  <div className="bg-white p-4 rounded shadow h-full">
    <h2 className="text-lg font-semibold mb-2">Revenue</h2>
    <div className="h-40 bg-gray-100 rounded"></div>
    <div className="text-sm mt-2">
      <span className="font-bold">Current Week</span> $58,211 &nbsp;|&nbsp;
      <span className="font-bold">Previous Week</span> $68,768
    </div>
  </div>
);

export default LineChartCard;
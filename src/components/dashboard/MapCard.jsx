import React from "react";

const MapCard = () => (
  <div className="bg-white p-4 rounded shadow h-full">
    <h2 className="text-lg font-semibold mb-4">Revenue by Location</h2>
    <div className="h-24 bg-gray-100 rounded mb-4"></div>
    <ul className="text-sm">
      <li className="flex justify-between"><span>New York</span><span>72K</span></li>
      <li className="flex justify-between"><span>San Francisco</span><span>39K</span></li>
      <li className="flex justify-between"><span>Sydney</span><span>25K</span></li>
      <li className="flex justify-between"><span>Singapore</span><span>61K</span></li>
    </ul>
  </div>
);

export default MapCard;
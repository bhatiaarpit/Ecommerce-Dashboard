import React from "react";

const locationData = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
];

const RevenueByLocation = () => (
  <div className="bg-white dark:bg-[#3c4555] p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
      Revenue by Location
    </h3>
    <div className="mb-6">
      {/* World map with location pins */}
      <div className="relative bg-blue-50 dark:bg-sky-900 rounded-lg h-48 overflow-hidden">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Simplified world map outline */}
          <path
            d="M50 50 L120 45 L180 55 L240 50 L300 60 L350 55 L350 150 L300 140 L240 150 L180 145 L120 155 L50 150 Z"
            fill="#E0F2FE"
            stroke="#BAE6FD"
            strokeWidth="1"
          />
          {/* Location pins */}
          <circle cx="90" cy="80" r="4" fill="#3B82F6" />
          <circle cx="70" cy="90" r="4" fill="#3B82F6" />
          <circle cx="280" cy="130" r="4" fill="#3B82F6" />
          <circle cx="300" cy="110" r="4" fill="#3B82F6" />

          {/* Connection lines */}
          <path
            d="M90 80 Q200 30 280 130"
            stroke="#3B82F6"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,3"
          />
          <path
            d="M70 90 Q150 40 300 110"
            stroke="#3B82F6"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,3"
          />
        </svg>
      </div>
    </div>
    <div className="space-y-3">
      {locationData.map((location, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">{location.city}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{location.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RevenueByLocation;

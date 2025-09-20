import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const salesChannels = [
  { name: "Direct", value: 300.56, color: "#374151", percentage: 38.6 },
  { name: "Affiliate", value: 135.18, color: "#86EFAC", percentage: 25 },
  { name: "Sponsored", value: 154.02, color: "#A7F3D0", percentage: 20 },
  { name: "E-mail", value: 48.96, color: "#D1FAE5", percentage: 16.4 },
];

// Total Sales Pie Chart
const TotalSalesChart = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">Total Sales</h3>
    <div className="flex items-center justify-center mb-6">
      <div className="relative">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={salesChannels}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
            >
              {salesChannels.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">38.6%</div>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-3">
      {salesChannels.map((channel, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-3"
              style={{ backgroundColor: channel.color }}
            ></div>
            <span className="text-sm text-gray-600">{channel.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-900">
            ${channel.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TotalSalesChart;

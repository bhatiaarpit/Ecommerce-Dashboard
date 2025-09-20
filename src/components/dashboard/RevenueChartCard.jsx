import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', current: 10, previous: 15 },
  { month: 'Feb', current: 18, previous: 12 },
  { month: 'Mar', current: 15, previous: 8 },
  { month: 'Apr', current: 22, previous: 18 },
  { month: 'May', current: 12, previous: 25 },
  { month: 'Jun', current: 25, previous: 20 }
];

const RevenueChartCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
        <div className="flex space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
            <span className="text-gray-600">Current Week</span>
            <span className="text-gray-900 font-medium ml-1">$58,211</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-gray-600">Previous Week</span>
            <span className="text-gray-900 font-medium ml-1">$68,768</span>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              domain={[0, 30]}
            />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#000000" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#60A5FA" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

export default RevenueChartCard
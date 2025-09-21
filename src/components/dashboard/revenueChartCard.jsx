import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", current: 10, previous: 15 },
  { month: "Feb", current: 18, previous: 12 },
  { month: "Mar", current: 15, previous: 8 },
  { month: "Apr", current: 22, previous: 18 },
  { month: "May", current: 12, previous: 25 },
  { month: "Jun", current: 25, previous: 20 },
];

const RevenueChartCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  return (
    <div className="bg-white dark:bg-[#3c4555] p-4 sm:p-6 rounded-lg shadow-sm max-w-full overflow-x-auto">
      <div className="max-w-screen-sm mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 px-2 sm:px-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Revenue</h3>
          <div className="flex space-x-6 text-sm">
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-1 sm:mr-2 ${
                  darkMode ? "bg-gray-100" : "bg-black"
                }`}
              ></div>
              <span className={`hidden sm:inline ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Current Week
              </span>
              <span className={`font-medium ml-1 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                $58,211
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-1 sm:mr-2"></div>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300">Previous Week</span>
              <span className="font-medium ml-1 text-gray-900 dark:text-gray-100">$68,768</span>
            </div>
          </div>
        </div>
        <div className="h-56 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#f0f0f0"} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: darkMode ? "#9CA3AF" : "#6b7280", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: darkMode ? "#9CA3AF" : "#6b7280", fontSize: 12 }}
                domain={[0, 30]}
              />
              <Line
                type="monotone"
                dataKey="current"
                stroke={darkMode ? "#60A3FA" : "#111827"}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke={darkMode ? "#93C5FD" : "#60A3FA"}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChartCard;

import React from "react";

// Projections vs Actuals Bar Chart Component
const ProjectionsChart = () => (
  <div className="bg-white dark:bg-[#3c4555] p-6 rounded-lg shadow-sm h-80">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
      Projections vs Actuals
    </h3>

    {/* Y-axis labels */}
    <div className="flex h-52">
      <div className="flex flex-col justify-between text-sm text-gray-500 dark:text-gray-300 mr-4 py-2">
        <span>30M</span>
        <span>20M</span>
        <span>10M</span>
        <span>0</span>
      </div>

      {/* Bar chart area */}
      <div className="flex-1 flex items-end justify-between space-x-2 border-l border-b border-gray-200 dark:border-gray-700 pl-4 pb-2">
        {/* Bars for each month */}
        {[
          { month: "Jan", height: 60 },
          { month: "Feb", height: 100 },
          { month: "Mar", height: 80 },
          { month: "Apr", height: 120 },
          { month: "May", height: 60 },
          { month: "Jun", height: 120 },
        ].map(({ month, height }) => (
          <div key={month} className="flex flex-col items-center">
            <div
              className="w-8 bg-blue-400 dark:bg-sky-500 rounded-t"
              style={{ height: `${height}px` }}
            ></div>
            <span className="text-xs text-gray-500 dark:text-gray-300 mt-2">{month}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectionsChart;

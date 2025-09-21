import React from "react";

import RevenueChartCard from "../components/dashboard/revenueChartCard";
import StatCard from "../components/dashboard/statCard";
import ProjectionsChart from "../components/dashboard/projectionsChart";
import TotalSalesChart from "../components/dashboard/pieChartCard";
import RevenueByLocation from "../components/dashboard/revenueByLocation";
import TableCard from "../components/dashboard/tableCard"; // Make sure this import exists

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#23272F]">
      {/* Header */}
      <div className="bg-white dark: border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">eCommerce</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* StatCards should apply similar colors inside */}
              <StatCard
                title="Customers"
                value="3,781"
                change="+11.01%"
                isPositive={true}
                cardType="customers"
                // Make sure StatCard uses similar dark mode bg and text colors internally
              />
              <StatCard
                title="Orders"
                value="1,219"
                change="-0.03%"
                isPositive={false}
                cardType="orders"
              />
              <StatCard
                title="Revenue"
                value="$695"
                change="+15.03%"
                isPositive={true}
                cardType="revenue"
              />
              <StatCard
                title="Growth"
                value="30.1%"
                change="+6.08%"
                isPositive={true}
                cardType="growth"
              />
            </div>
          </div>

          <div className="md:col-span-1 col-span-1 rounded-lg p-4">
            <ProjectionsChart />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 col-span-1 rounded-lg p-4">
            <RevenueChartCard />
          </div>
          <div className="md:col-span-1 col-span-1  rounded-lg p-4">
            <RevenueByLocation />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 col-span-1  rounded-lg p-4">
            <TableCard />
          </div>
          <div className="md:col-span-1 col-span-1  rounded-lg p-4">
            <TotalSalesChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
    
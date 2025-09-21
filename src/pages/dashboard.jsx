import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

import RevenueChartCard from "../components/dashboard/revenueChartCard";
import StatCard from "../components/dashboard/statCard";
import ProjectionsChart from "../components/dashboard/projectionsChart";
import TotalSalesChart from "../components/dashboard/pieChartCard";
import RevenueByLocation from "../components/dashboard/revenueByLocation";
import TableCard from "../components/dashboard/tableCard"; // Make sure this import exists

const Dashboard = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - matches the layout exactly */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-900">eCommerce</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Top Row - Blue Stat Cards with different shades */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-6">
                            <StatCard
                                title="Customers"
                                value="3,781"
                                change="+11.01%"
                                isPositive={true}
                                cardType="customers"
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

                    <div className="col-span-1">
                        <ProjectionsChart />
                    </div>
                </div>

                {/* Third Row - Revenue Chart + Location Map */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                        <RevenueChartCard />
                    </div>
                    <div className="col-span-1">
                        <RevenueByLocation />
                    </div>
                </div>

                {/* Bottom Row - Table + Pie Chart */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <TableCard />
                    </div>
                    <div className="col-span-1">
                        <TotalSalesChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

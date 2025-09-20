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

import RevenueChartCard from "../components/dashboard/RevenueChartCard";
import StatCard from "../components/dashboard/StatCard";
import ProjectionsChart from "../components/dashboard/ProjectionsChart";
import TotalSalesChart from "../components/dashboard/PieChartCard";
import RevenueByLocation from "../components/dashboard/RevenueByLocation";
import TableCard from "../components/dashboard/TableCard"; // Make sure this import exists

const Dashboard = () => {
    // Sample data matching the design exactly
    const revenueData = [
        { month: "Jan", current: 10, previous: 15 },
        { month: "Feb", current: 18, previous: 12 },
        { month: "Mar", current: 15, previous: 8 },
        { month: "Apr", current: 22, previous: 18 },
        { month: "May", current: 12, previous: 25 },
        { month: "Jun", current: 25, previous: 20 },
    ];

    const projectionsData = [
        { month: "Jan", value: 15 },
        { month: "Feb", value: 25 },
        { month: "Mar", value: 20 },
        { month: "Apr", value: 30 },
        { month: "May", value: 15 },
        { month: "Jun", value: 30 },
    ];

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

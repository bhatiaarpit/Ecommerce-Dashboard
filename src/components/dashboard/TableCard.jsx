import React from 'react'
import PaginationControls from "../tables/paginationControls";
import OrderTable from "../tables/OrderTable";

    const topProducts = [
        {
            name: "ASOS Ridley High Waist",
            price: "$79.49",
            quantity: 82,
            amount: "$6,518.18",
        },
        {
            name: "Marco Lightweight Shirt",
            price: "$128.50",
            quantity: 37,
            amount: "$4,754.50",
        },
        {
            name: "Half Sleeve Shirt",
            price: "$39.99",
            quantity: 64,
            amount: "$2,559.36",
        },
        {
            name: "Lightweight Jacket",
            price: "$20.00",
            quantity: 184,
            amount: "$3,680.00",
        },
        { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
    ];

    // Table Card Component
    const TableCard = () => (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
            <OrderTable />
            <PaginationControls />
        </div>
    );

export default TableCard
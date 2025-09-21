import React from 'react';
import PaginationControls from "../tables/paginationControls";
import OrderTable from "../tables/orderTable";

const TableCard = () => (
  <div className="bg-white dark:bg-[#3c4555] p-4 rounded shadow h-full">
    <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Top Selling Products</h2>
    <OrderTable />
    <PaginationControls />
  </div>
);

export default TableCard;

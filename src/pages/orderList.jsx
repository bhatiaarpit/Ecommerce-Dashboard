import React, { useState } from 'react';
import { 
  Plus, 
  Filter, 
  ArrowUpDown, 
  Search, 
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import orders from '../data/orderList';

const OrderList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusStyle = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-700';
      case 'green':
        return 'bg-green-100 text-green-700';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-700';
      case 'gray':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(orders.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(i => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#262930]">
      {/* Header */}
      <div className="bg-white dark:bg-[#3c4555] border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 md:px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Order List</h1>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="bg-white dark:bg-[#3c4555] rounded-lg border border-gray-200 dark:border-gray-700">
          {/* Table Header Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 gap-4 md:gap-0">
            <div className="flex items-center space-x-2">
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white text-gray-900 dark:bg-[#23272F] dark:text-gray-100 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-[#262930]">
                <tr>
                  <th className="w-12 p-4">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedRows.length === orders.length}
                      className="rounded border-gray-300 dark:border-gray-600"
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Order ID</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">User</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Project</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Address</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="w-12 p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#3c4555] divide-y divide-gray-200 dark:divide-gray-700">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-[#2A2D35]">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => handleSelectRow(index)}
                        className="rounded border-gray-300 dark:border-gray-600"
                      />
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{order.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                          {order.user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-900 dark:text-gray-100">{order.project}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-900 dark:text-gray-100">{order.address}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {order.date}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(order.statusColor)}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          order.statusColor === 'green' ? 'bg-green-500' :
                          order.statusColor === 'blue' ? 'bg-blue-500' :
                          order.statusColor === 'yellow' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}></div>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to 10 of 10 entries
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-[#2A2D35]">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-[#2A2D35]'
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-[#2A2D35]">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

// pages/Products.js
import React, { useState } from 'react';
import { 
    Plus, 
    Filter, 
    ArrowUpDown, 
    Search, 
    Calendar,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Package,
    DollarSign,
    TrendingUp,
    TrendingDown,
    Eye
} from 'lucide-react';

const Products = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Dummy products data
    const products = [
        {
            id: "#P001",
            name: "ASOS Ridley High Waist",
            category: "Jeans",
            price: "$79.49",
            stock: 82,
            sold: 120,
            revenue: "$9,540.80",
            status: "Active",
            statusColor: "green",
            trend: "up",
            trendValue: "+12%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P002",
            name: "Marco Lightweight Shirt",
            category: "Clothing",
            price: "$128.50",
            stock: 37,
            sold: 85,
            revenue: "$10,922.50",
            status: "Active",
            statusColor: "green",
            trend: "up",
            trendValue: "+8%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P003",
            name: "Half Sleeve Shirt",
            category: "Clothing",
            price: "$39.99",
            stock: 64,
            sold: 200,
            revenue: "$7,998.00",
            status: "Active",
            statusColor: "green",
            trend: "down",
            trendValue: "-3%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P004",
            name: "Lightweight Jacket",
            category: "Outerwear",
            price: "$20.00",
            stock: 184,
            sold: 95,
            revenue: "$1,900.00",
            status: "Low Stock",
            statusColor: "yellow",
            trend: "up",
            trendValue: "+15%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P005",
            name: "Marco Shoes",
            category: "Footwear",
            price: "$79.49",
            stock: 64,
            sold: 150,
            revenue: "$11,923.50",
            status: "Out of Stock",
            statusColor: "red",
            trend: "down",
            trendValue: "-5%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P006",
            name: "Wireless Headphones",
            category: "Electronics",
            price: "$199.99",
            stock: 25,
            sold: 75,
            revenue: "$14,999.25",
            status: "Active",
            statusColor: "green",
            trend: "up",
            trendValue: "+22%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P007",
            name: "Smart Watch Series",
            category: "Electronics",
            price: "$299.99",
            stock: 15,
            sold: 45,
            revenue: "$13,499.55",
            status: "Low Stock",
            statusColor: "yellow",
            trend: "up",
            trendValue: "+18%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P008",
            name: "Cotton T-Shirt",
            category: "Clothing",
            price: "$24.99",
            stock: 150,
            sold: 300,
            revenue: "$7,497.00",
            status: "Active",
            statusColor: "green",
            trend: "up",
            trendValue: "+7%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P009",
            name: "Running Sneakers",
            category: "Footwear",
            price: "$89.99",
            stock: 45,
            sold: 65,
            revenue: "$5,849.35",
            status: "Active",
            statusColor: "green",
            trend: "down",
            trendValue: "-2%",
            image: "/api/placeholder/40/40"
        },
        {
            id: "#P010",
            name: "Leather Backpack",
            category: "Accessories",
            price: "$149.99",
            stock: 0,
            sold: 30,
            revenue: "$4,499.70",
            status: "Out of Stock",
            statusColor: "red",
            trend: "down",
            trendValue: "-10%",
            image: "/api/placeholder/40/40"
        }
    ];

    const getStatusStyle = (color) => {
        switch (color) {
            case 'green':
                return 'bg-green-100 text-green-700';
            case 'yellow':
                return 'bg-yellow-100 text-yellow-700';
            case 'red':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(products.map((_, index) => index));
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
    <div className="min-h-screen bg-gray-50 dark:bg-[#23272F]">
      {/* Header */}
      <div className="bg-white dark:bg-[#3c4555] border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 md:px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product List</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="bg-white dark:bg-[#3c4555] rounded-lg border border-gray-200 dark:border-gray-700">
          {/* Table Header Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 gap-4 md:gap-0">
            <div className="flex items-center space-x-2">
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-[#2A2D35]">
                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-[#2A2D35]">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-[#2A2D35]">
                <ArrowUpDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full dark:bg-[#23272F] dark:text-gray-100 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-max bg-white dark:bg-[#262930]">
              <thead className="bg-gray-50 dark:bg-[#23272F]">
                <tr>
                  <th className="w-12 p-4">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedRows.length === products.length}
                      className="rounded border-gray-300 dark:border-gray-600"
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Product ID</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Stock</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Sold</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="w-12 p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#3c4555] dark:divide-gray-700">
                {products.map((product, index) => (
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
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mr-3">
                          <Package className="w-5 h-5 text-gray-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-900 dark:text-gray-100">{product.category}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                        <DollarSign className="w-3 h-3 mr-1 text-gray-400 dark:text-gray-500" />
                        {product.price.replace('$', '')}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-sm font-medium ${
                        product.stock === 0 ? 'text-red-600' :
                        product.stock < 50 ? 'text-yellow-600' :
                        'text-gray-900 dark:text-gray-100'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 mr-2">{product.sold}</span>
                        <div className="flex items-center">
                          {product.trend === 'up' ? (
                            <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                          )}
                          <span className={`text-xs ${
                            product.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {product.trendValue}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.revenue}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(product.statusColor)}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          product.statusColor === 'green' ? 'bg-green-500' :
                          product.statusColor === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}></div>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
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

export default Products;

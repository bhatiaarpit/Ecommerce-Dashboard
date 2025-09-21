// pages/Customers.js
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
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

const Customers = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Dummy customers data
    const customers = [
        {
            id: "#C001",
            user: { name: "Natali Craig", avatar: "/api/placeholder/32/32" },
            email: "natali.craig@example.com",
            phone: "+1 (555) 123-4567",
            location: "Oakland, CA",
            orders: 12,
            totalSpent: "$2,450.00",
            lastOrder: "Just now",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C002",
            user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
            email: "kate.morrison@example.com",
            phone: "+1 (555) 234-5678",
            location: "San Francisco, CA",
            orders: 8,
            totalSpent: "$1,890.50",
            lastOrder: "A minute ago",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C003",
            user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
            email: "drew.cano@example.com",
            phone: "+1 (555) 345-6789",
            location: "Ocala, FL",
            orders: 15,
            totalSpent: "$3,210.75",
            lastOrder: "1 hour ago",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C004",
            user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
            email: "orlando.diggs@example.com",
            phone: "+1 (555) 456-7890",
            location: "Baton Rouge, LA",
            orders: 3,
            totalSpent: "$567.25",
            lastOrder: "Yesterday",
            status: "Inactive",
            statusColor: "gray"
        },
        {
            id: "#C005",
            user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
            email: "andi.lane@example.com",
            phone: "+1 (555) 567-8901",
            location: "Olivette, MO",
            orders: 7,
            totalSpent: "$1,450.00",
            lastOrder: "Feb 2, 2023",
            status: "Blocked",
            statusColor: "red"
        },
        {
            id: "#C006",
            user: { name: "Sarah Johnson", avatar: "/api/placeholder/32/32" },
            email: "sarah.johnson@example.com",
            phone: "+1 (555) 678-9012",
            location: "Austin, TX",
            orders: 20,
            totalSpent: "$4,250.00",
            lastOrder: "2 hours ago",
            status: "VIP",
            statusColor: "yellow"
        },
        {
            id: "#C007",
            user: { name: "Mike Wilson", avatar: "/api/placeholder/32/32" },
            email: "mike.wilson@example.com",
            phone: "+1 (555) 789-0123",
            location: "Denver, CO",
            orders: 5,
            totalSpent: "$890.50",
            lastOrder: "3 days ago",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C008",
            user: { name: "Emily Davis", avatar: "/api/placeholder/32/32" },
            email: "emily.davis@example.com",
            phone: "+1 (555) 890-1234",
            location: "Seattle, WA",
            orders: 11,
            totalSpent: "$2,100.75",
            lastOrder: "1 week ago",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C009",
            user: { name: "James Brown", avatar: "/api/placeholder/32/32" },
            email: "james.brown@example.com",
            phone: "+1 (555) 901-2345",
            location: "Phoenix, AZ",
            orders: 9,
            totalSpent: "$1,650.25",
            lastOrder: "5 days ago",
            status: "Active",
            statusColor: "green"
        },
        {
            id: "#C010",
            user: { name: "Lisa Garcia", avatar: "/api/placeholder/32/32" },
            email: "lisa.garcia@example.com",
            phone: "+1 (555) 012-3456",
            location: "Miami, FL",
            orders: 6,
            totalSpent: "$1,200.00",
            lastOrder: "1 month ago",
            status: "Inactive",
            statusColor: "gray"
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
            case 'gray':
                return 'bg-gray-100 text-gray-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(customers.map((_, index) => index));
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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Customer List</h1>
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white text-gray-900 dark:bg-[#23272F] dark:text-gray-100 dark:border-gray-700"
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
                      checked={selectedRows.length === customers.length}
                      className="rounded border-gray-300 dark:border-gray-600"
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Customer ID</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Contact</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Location</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Orders</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Total Spent</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Last Order</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="w-12 p-4"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#3c4555] dark:divide-gray-700">
                {customers.map((customer, index) => (
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
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                          {customer.user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                          <Mail className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Phone className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500" />
                          {customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {customer.location}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.orders}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.totalSpent}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-sm text-gray-900 dark:text-gray-100">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {customer.lastOrder}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(customer.statusColor)}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          customer.statusColor === 'green' ? 'bg-green-500' :
                          customer.statusColor === 'yellow' ? 'bg-yellow-500' :
                          customer.statusColor === 'red' ? 'bg-red-500' :
                          'bg-gray-500'
                        }`}></div>
                        {customer.status}
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

export default Customers;

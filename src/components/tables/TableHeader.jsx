import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-left">Name</th>
        <th className="px-4 py-2 text-left">Price</th>
        <th className="px-4 py-2 text-left">Quantity</th>
        <th className="px-4 py-2 text-left">Amount</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
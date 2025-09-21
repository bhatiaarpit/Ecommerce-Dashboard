import React from 'react';

const TableRow = ({ name, price, quantity, amount }) => {
  return (
    <tr>
      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{name}</td>
      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{price}</td>
      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{quantity}</td>
      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{amount}</td>
    </tr>
  );
};

export default TableRow;
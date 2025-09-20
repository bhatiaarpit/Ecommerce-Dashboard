import React from 'react';

const TableRow = ({ name, price, quantity, amount }) => {
  return (
    <tr>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{price}</td>
      <td className="px-4 py-2">{quantity}</td>
      <td className="px-4 py-2">{amount}</td>
    </tr>
  );
};

export default TableRow;
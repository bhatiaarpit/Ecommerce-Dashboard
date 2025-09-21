import React from 'react';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

const products = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,755.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,695.84' },
];

const orderTable = () => {
  return (
    <table className="min-w-full bg-white">
      <TableHeader />
      <tbody>
        {products.map((product, idx) => (
          <TableRow key={idx} {...product} />
        ))}
      </tbody>
    </table>
  );
};

export default orderTable;
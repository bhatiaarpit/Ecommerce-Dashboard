import React from 'react';

const PaginationControls = () => {
  return (
    <div className="flex justify-end items-center mt-4">
      <button className="px-2 py-1 border rounded mr-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">Prev</button>
      <button className="px-2 py-1 border rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">Next</button>
    </div>
  );
};

export default PaginationControls;
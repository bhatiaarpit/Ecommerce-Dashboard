import React from 'react';

const PaginationControls = () => {
  return (
    <div className="flex justify-end items-center mt-4">
      <button className="px-2 py-1 border rounded mr-2">Prev</button>
      <button className="px-2 py-1 border rounded">Next</button>
    </div>
  );
};

export default PaginationControls;
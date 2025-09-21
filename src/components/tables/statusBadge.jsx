import React from 'react';

const StatusBadge = ({ status }) => {
  return (
    <span className="px-2 py-1 rounded text-xs font-semibold">
      {status}
    </span>
  );
};

export default StatusBadge;

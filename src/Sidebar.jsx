import React from 'react';

function Sidebar({ setActiveSection }) {
  return (
    <div className="w-1/4 bg-gray-800 text-white p-4 flex flex-col">
      <button
        onClick={() => setActiveSection('home')}
        className="p-2 mb-4 bg-gray-700 hover:bg-gray-600 rounded"
      >
        Home
      </button>
      <button
        onClick={() => setActiveSection('employee')}
        className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
      >
        
        Employee
      </button>
    </div>
  );
}

export default Sidebar;

import React from 'react';

function Employee({ data, searchTerm }) {
  // Filter employees based on search term
  const filteredEmployees = data[0].employee.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredEmployees.length > 0 ? (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="p-2 border-b border-gray-300">
              {employee.name} - {employee.company} - {employee.salary}
            </li>
          ))}
        </ul>
      ) : (
        <p className="p-2 text-red-500">No match found</p>
      )}
    </div>
  );
}

export default Employee;

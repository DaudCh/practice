import React, { useState } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Employee from './Employee';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const data = [
    {
      user: {
        name: "daud",
        email: "daud@gmail.com",
        address: "hjbscxkjabscas"
      },
      employee: [
        { id: 0, name: "ali", salary: "10000", company: "p" },
        { id: 1, name: "ammar", salary: "10000", company: "p" },
        { id: 2, name: "MOIZ", salary: "10000", company: "p" },
        { id: 3, name: "hammad", salary: "10000", company: "p" },
        { id: 4, name: "qamar", salary: "10000", company: "p" },
        { id: 5, name: "pola", salary: "10000", company: "p" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex bg-white text-black">
    
      <Sidebar setActiveSection={setActiveSection} />

   
      <div className="flex-1 p-6 flex flex-col">
    
        <div className="flex items-center justify-between mb-4">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <img
           
            alt="AA"
            className="w-16 h-16 rounded-full ml-4 border-2 border-gray-200"
          />
        </div>

   
        <div className="flex-1">
          {activeSection === 'home' && <h2 className="text-2xl">Home</h2>}
          {activeSection === 'employee' && (
            <Employee data={data} searchTerm={searchTerm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

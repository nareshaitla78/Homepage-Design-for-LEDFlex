// src/components/Navbar.js
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold flex items-center">
        <img src="/assets/ledflexgroup_logo.jpg" alt="Logo" className="h-10 mr-2" />
        LED<span className="text-gray-400">FLEX</span>
      </div>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-300">Products</li>
        <li className="hover:text-gray-300">About</li>
        <li className="hover:text-gray-300">Projects</li>
        <li className="hover:text-gray-300">Press & Media</li>
        <li className="hover:text-gray-300">Contact</li>
        <li className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-300">
            More ▼
          </button>
          {dropdownOpen && (
            <div className="absolute bg-black text-white p-2 rounded shadow-md mt-2">
              <p className="hover:bg-gray-700 p-1 cursor-pointer">Option 1</p>
              <p className="hover:bg-gray-700 p-1 cursor-pointer">Option 2</p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

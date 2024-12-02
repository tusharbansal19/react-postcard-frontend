import React, { useState } from "react";
import { FaHome, FaEdit, FaInfoCircle, FaEnvelope, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar open/close
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", icon: <FaHome />, route: "/" },
    { label: "Create", icon: <FaEdit />, route: "/create" },
    { label: "About", icon: <FaInfoCircle />, route: "/about" },
    { label: "Contact", icon: <FaEnvelope />, route: "/contact" },
    { label: "Logout", icon: <FaSignOutAlt />, route: "/logout" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        } hidden sm:flex fixed top-[67px] left-0 h-full bg-black text-white z-[100] transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <ul className="mt-8 w-full">
          <div className="flex justify-end w-full pr-7">
            <button onClick={toggleSidebar} className="text-white text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-all">
              <div className="mr-4 text-xl">{item.icon}</div>
              {isOpen && (
                <Link to={item.route} className="text-white text-lg">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}

      {/* Sidebar for Small Screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden fixed top-[67px] left-0 w-60 h-full bg-black text-white z-[100] transition-all duration-300`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="mt-8">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-all">
              <div className="mr-4 text-xl">{item.icon}</div>
              <Link to={item.route} className="text-white text-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Sidebar;

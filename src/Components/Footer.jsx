import React, { useState } from "react";
import { FaInfoCircle, FaShieldAlt, FaFileAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const footerItems = [
    { label: "About Us", icon: <FaInfoCircle /> },
    { label: "Privacy Policy", icon: <FaShieldAlt /> },
    { label: "Terms of Service", icon: <FaFileAlt /> },
    { label: "Contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <footer className="relative w-full bg-black  text-white px-20  py-10 ">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg z-0"></div>

      <div className="relative z-10 flex justify-between items-center">
        <ul className="flex space-x-6 sm:space-x-4 relative">
          {/* Sliding Box Effect */}
          <div
            className={`absolute bg-white bg-opacity-20 rounded-lg transition-all duration-300`}
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              left: activeIndex !== null ? `${(activeIndex * 100) / footerItems.length}%` : "-100%",
              width: activeIndex !== null ? `calc(100% / ${footerItems.length})` : "0",
              height: "40px",
            }}
          ></div>

          {footerItems.map((item, index) => (
            <li
              key={index}
              className="relative z-10 px-4 py-2 text-sm flex items-center space-x-2 cursor-pointer hover:text-blue-300 transition-colors duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="mx-auto flex " >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className=" ml-3 hover:text-orange-400">thanks for yur visiting <div className=" ml-7 hover:text-green-600"> explore and take fun...</div></div>
      </div>

      {/* Additional Details */}
      <div className="mt-6 text-center text-sm opacity-80">
        <p>© 2024 My Platform. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

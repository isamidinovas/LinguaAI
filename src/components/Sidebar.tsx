"use client";


import { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <FaHome size={24} />, label: "Home" },
    { icon: <FaUser size={24} />, label: "Profile" },
    { icon: <FaCog size={24} />, label: "Settings" },
  ];

  return (
    <>
      {/* Десктопный sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg flex flex-col py-10
        transform transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-20"} hidden sm:flex`}
      >
        {/* Ссылки */}
        <div className="flex flex-col gap-8 mt-10 w-full items-center md:items-start px-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="flex flex-col items-center md:flex-row md:gap-3 text-gray-700 hover:text-cyan-700 w-full"
            >
              <div>{link.icon}</div>
              {isOpen && (
                <span className="mt-2 md:mt-0 md:ml-2 text-sm">{link.label}</span>
              )}
            </a>
          ))}
        </div>

        {/* Кнопка открытия/закрытия десктоп */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-20px text-black p-2 rounded-l-md  flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GoChevronRight
            size={24}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Мобильная кнопка */}
      <button
        className="absolute top-16 left-4 z-50 p-3 text-black rounded-md  sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GoChevronRight
          size={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Мобильный sidebar */}
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-30 z-40 sm:hidden">
          <div className="absolute left-0 top-23 h-full w-19 bg-white shadow-lg flex flex-col py-10 px-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="flex flex-col items-center text-gray-700 hover:text-cyan-700 mb-6"
              >
                <div>{link.icon}</div>
                <span className="mt-2 text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineBarChart,
  AiOutlineSetting,
} from "react-icons/ai";

const SideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Home",
      icon: <AiOutlineHome size={20} />,
      path: "/",
    },
    {
      name: "Content",
      icon: <AiOutlineFileText size={20} />,
      path: "/content",
    },
    {
      name: "Plan",
      icon: <AiOutlineCalendar size={20} />,
      path: "/plan",
    },
    {
      name: "People",
      icon: <AiOutlineTeam size={20} />,
      path: "/people",
    },
    {
      name: "Recaps",
      icon: <AiOutlineBarChart size={20} />,
      path: "/recaps",
    },
    {
      name: "Settings",
      icon: <AiOutlineSetting size={20} />,
      path: "/settings",
    },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-white border-r border-gray-100 min-w-[240px] flex flex-col">
      {/* Logo section */}
      <div className="px-6 py-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-medium">S</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Studio</span>
        </div>
      </div>

      {/* Navigation section */}
      <nav className="px-3 py-4 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 my-1 rounded-lg text-[15px] font-medium transition-colors ${
              currentPath === item.path ||
              (currentPath === "/plan" && item.name === "Plan")
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <span className="text-current">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Publish button section */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-[#1E2B3A] text-black py-2.5 px-4 rounded-lg font-medium hover:bg-[#2C3E50] transition-colors">
          Publish
        </button>
      </div>
    </aside>
  );
};

export default SideNav;

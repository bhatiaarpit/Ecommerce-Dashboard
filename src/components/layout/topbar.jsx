import React from "react";
import { Search, Bell, Sun, Settings, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const breadcrumbMap = {
  "/": ["Dashboards", "Default"],
  "/projects": ["Dashboards", "Projects"],
  "/online-courses": ["Dashboards", "Online Courses"],
};

const pageNames = {
  "/": "Dashboard",
  "/projects": "Projects",
  "/online-courses": "Online Courses",
};

const Topbar = ({ onToggleRightSidebar, onToggleSettings,onToggleAccount }) => {
  const location = useLocation();
  const crumbs = breadcrumbMap[location.pathname] || ["Dashboards", "Default"];
  const page = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="h-16 z-10 fixed w-[-webkit-fill-available] bg-white border-b border-gray-200 flex items-center px-6 justify-between">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm">
        <Link
          to="/"
          className={
            crumbs[0] === "Dashboards" ? "font-semibold" : "text-gray-400"
          }
        >
          {crumbs[0]}
        </Link>
        <span className="text-gray-400">/</span>
        {location.pathname === "/" ? (
          <span className="text-gray-400">{crumbs[1]}</span>
        ) : (
          <span className="font-semibold">{crumbs[1]}</span>
        )}
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 text-gray-500">
          <Sun size={18} className="cursor-pointer" />
          <Bell
            size={18}
            className="cursor-pointer"
            onClick={onToggleRightSidebar}
          />
        <Settings
            size={18}
            className="cursor-pointer"
            onClick={onToggleSettings}
          />
          <User
  size={18}
  className="cursor-pointer"
  onClick={onToggleAccount}
/>

        </div>
      </div>
    </header>
  );
};

export default Topbar;

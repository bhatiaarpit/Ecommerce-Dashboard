import React, { useEffect, useState } from "react";
import { Search, Bell, Sun, Moon, Settings, User } from "lucide-react";
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

const Topbar = ({ onToggleRightSidebar, onToggleSettings, onToggleAccount }) => {
  const location = useLocation();
  const crumbs = breadcrumbMap[location.pathname] || ["Dashboards", "Default"];
  const page = pageNames[location.pathname] || "Dashboard";

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  };

  return (
    <header className="h-16 z-10 fixed w-[-webkit-fill-available] bg-white dark:bg-[#23272F] border-b border-gray-200 dark:border-gray-700 flex items-center px-6 justify-between">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm">
        <Link
          to="/"
          className={
            crumbs[0] === "Dashboards"
              ? "font-semibold text-gray-700 dark:text-gray-100"
              : "text-gray-400 dark:text-gray-500"
          }
        >
          {crumbs[0]}
        </Link>
        <span className="text-gray-400 dark:text-gray-500">/</span>
        {location.pathname === "/" ? (
          <span className="text-gray-400 dark:text-gray-500">{crumbs[1]}</span>
        ) : (
          <span className="font-semibold text-gray-700 dark:text-gray-100">{crumbs[1]}</span>
        )}
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 border rounded-lg bg-gray-50 dark:bg-[#3c4555] text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-gray-100 dark:border-gray-700 border-gray-300"
          />
          <Search size={16} className="absolute left-2 top-2.5 text-gray-400 dark:text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-300">
          {darkMode ? (
            <Moon
              size={18}
              className="cursor-pointer text-gray-500 dark:text-gray-300"
              onClick={handleToggleDarkMode}
            />
          ) : (
            <Sun
              size={18}
              className="cursor-pointer text-gray-500 dark:text-gray-300"
              onClick={handleToggleDarkMode}
            />
          )}
          <Bell
            size={18}
            className="cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={onToggleRightSidebar}
          />
          <Settings
            size={18}
            className="cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={onToggleSettings}
          />
          <User
            size={18}
            className="cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={onToggleAccount}
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;

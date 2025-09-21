import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import RightSidebar from "./rightSidebar"; // Adjust the import based on your file structure

const Header = ({ onToggleMenu }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

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
    <>
      <header className="md:hidden h-16 w-full fixed top-0 left-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 dark:bg-gray-200 rounded-sm flex items-center justify-center text-white dark:text-gray-900 text-xs font-bold">
            B
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg">ByeWind</span>
        </div>
        <div className="flex items-center gap-3">
          {darkMode ? (
            <Moon size={20} className="cursor-pointer" onClick={handleToggleDarkMode} />
          ) : (
            <Sun size={20} className="cursor-pointer" onClick={handleToggleDarkMode} />
          )}
          <span className="relative">
            <button onClick={() => setShowNotifications(true)} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </span>
          <Menu size={24} className="cursor-pointer" onClick={onToggleMenu} />
        </div>
      </header>
      {/* Notification Drawer */}
      <RightSidebar isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </>
  );
};

export default Header;

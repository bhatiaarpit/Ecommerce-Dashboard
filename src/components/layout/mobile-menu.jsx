import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Briefcase,
  PlayCircle,
  User,
  FileText,
  Building,
  BookOpen,
  Share2,
  ChevronDown,
  ChevronRight,
  Users,
  Package,
  ShoppingBag,
  TrendingUp,
  Circle,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationConfig = {
  favorites: [
    { to: "/overview", label: "Overview", icon: Circle, iconSize: 4 },
    { to: "/projects-fav", label: "Projects", icon: Circle, iconSize: 4 }
  ],
  dashboards: [
    { to: "/", label: "Default", icon: LayoutDashboard },
    {
      label: "ecommerce",
      icon: ShoppingCart,
      section: "ecommerce",
      children: [
        { to: "/ecommerce", label: "Dashboard", icon: TrendingUp },
        { to: "/orders", label: "Orders", icon: ShoppingBag },
        { to: "/customers", label: "Customers", icon: Users },
        { to: "/products", label: "Products", icon: Package }
      ]
    },
    {
      label: "projects",
      icon: Briefcase,
      section: "projects",
      children: [{ to: "/projects", label: "All Projects" }]
    },
    { to: "/online-courses", label: "Online Courses", icon: PlayCircle }
  ],
  pages: [
    {
      label: "User Profile",
      icon: User,
      section: "userProfile",
      children: [
        { label: "Overview" },
        { label: "Projects" },
        { label: "Campaigns" },
        { label: "Documents" },
        { label: "Followers" }
      ]
    },
    { label: "Account", icon: FileText, section: "account" },
    { label: "Corporate", icon: Building, section: "corporate" },
    { label: "Blog", icon: BookOpen, section: "blog" },
    { label: "Social", icon: Share2, section: "social" }
  ]
};

const styles = {
  activeLink:
    "text-gray-900 bg-gray-300 font-medium dark:text-gray-100 dark:bg-[#2E3440]",
  inactiveLink:
    "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-[#394553]",
  activeChild:
    "text-gray-900 bg-gray-300 dark:text-gray-100 dark:bg-[#2E3440]",
  inactiveChild:
    "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#394553] dark:hover:text-gray-100",
  activeBorder: "absolute left-0 top-0 w-1 h-full bg-[#81A1C1] rounded-r-sm"
};

const mobileMenu = ({ isOpen, onClose }) => {
  const [collapsedSections, setCollapsedSections] = useState({
    ecommerce: false,
    projects: true,
    userProfile: true,
    account: true,
    corporate: true,
    blog: true,
    social: true
  });

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderNavLink = ({
    to,
    label,
    icon: Icon,
    iconSize = 16,
    isChild = false
  }) => (
    <li key={to} className="relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-${isChild ? "1.5" : "2"} rounded-md transition-colors relative ${
            isActive
              ? isChild
                ? styles.activeChild
                : styles.activeLink
              : isChild
              ? styles.inactiveChild
              : styles.inactiveLink
          } ${isChild ? "text-sm" : ""}`
        }
        onClick={onClose}
      >
        {({ isActive }) => (
          <>
            {isActive && <span className={styles.activeBorder} />}
            {Icon && (
              <Icon
                size={iconSize}
                className={`${isActive ? "ml-1" : ""} ${
                  iconSize === 4 ? "fill-current" : ""
                }`}
              />
            )}
            <span className={!Icon && isActive ? "ml-1" : ""}>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );

  const renderCollapsibleSection = (item) => (
    <li key={item.label}>
      <div
        className="flex items-center justify-between px-3 py-2 cursor-pointer text-gray-700 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:bg-[#394553]"
        onClick={() => toggleSection(item.section)}
      >
        <div className="flex items-center gap-3">
          <item.icon size={16} />
          <span>{item.label}</span>
        </div>
        {collapsedSections[item.section] ? (
          <ChevronRight
            size={14}
            className="text-gray-400 dark:text-gray-500"
          />
        ) : (
          <ChevronDown
            size={14}
            className="text-gray-400 dark:text-gray-500"
          />
        )}
      </div>
      {!collapsedSections[item.section] && item.children && (
        <ul className="ml-6 mt-1 space-y-1">
          {item.children.map((child, idx) =>
            child.to ? (
              renderNavLink({ ...child, isChild: true })
            ) : (
              <li key={idx}>
                <div className="px-3 py-1 text-sm rounded-md cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#394553] dark:hover:text-gray-100">
                  {child.label}
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );

  const renderNavSection = (title, items) => (
    <div className="mb-6">
      <div className="text-xs font-medium uppercase mb-3 px-3 text-gray-500 dark:text-gray-400">
        {title}
      </div>
      <ul>{items.map((item) => (item.section ? renderCollapsibleSection(item) : renderNavLink(item)))}</ul>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 bg-black/40 flex">
      <div className="w-64 bg-white dark:bg-[#2b303c] h-full shadow-lg p-4 overflow-y-auto relative flex flex-col">
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 dark:bg-[#394553] text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#4C566A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-6 px-3">
          <div className="w-6 h-6 bg-[#3B4252] dark:bg-[#d8dee9] rounded-sm flex items-center justify-center text-white dark:text-[#2b3038] text-xs font-bold">
            B
          </div>
          <span className="font-semibold text-[#4C566A] dark:text-[#2b3038]">ByeWind</span>
        </div>

        <nav className="flex-1 text-sm">{[
          renderNavSection("Favorites", navigationConfig.favorites),
          renderNavSection("Dashboards", navigationConfig.dashboards),
          <div key="pages">
            <div className="text-xs font-medium uppercase mb-3 px-3 text-gray-500 dark:text-gray-400">
              Pages
            </div>
            <ul>
              {navigationConfig.pages.map((item) => renderCollapsibleSection(item))}
            </ul>
          </div>
        ]}</nav>

        <div className="mt-auto space-y-2">
          <button
            onClick={() => {
              if(window) window.dispatchEvent(new CustomEvent("openSettingsModal"));
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#3B4252] hover:bg-[#434C5E] text-[#D8DEE9] py-2"
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button
            onClick={() => {}} // Implement sign-out logic
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#BF616A] hover:bg-[#b15058] text-[#D8DEE9] py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
            </svg>
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};

export default mobileMenu;

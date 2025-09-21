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
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [collapsedSections, setCollapsedSections] = useState({
    ecommerce: false,
    projects: true,
    userProfile: true,
    account: true,
    corporate: true,
    blog: true,
    social: true,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Navigation configuration
  const navigationConfig = {
    favorites: [
      { to: "/overview", label: "Overview", icon: Circle, iconSize: 4 },
      { to: "/projects-fav", label: "Projects", icon: Circle, iconSize: 4 },
    ],
    dashboards: [
      { to: "/", label: "Default", icon: LayoutDashboard },
      {
        label: "eCommerce",
        icon: ShoppingCart,
        section: "ecommerce",
        children: [
          { to: "/ecommerce", label: "Dashboard", icon: TrendingUp },
          { to: "/orders", label: "Orders", icon: ShoppingBag },
          { to: "/customers", label: "Customers", icon: Users },
          { to: "/products", label: "Products", icon: Package },
        ],
      },
      {
        label: "Projects",
        icon: Briefcase,
        section: "projects",
        children: [{ to: "/projects", label: "All Projects" }],
      },
      { to: "/online-courses", label: "Online Courses", icon: PlayCircle },
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
          { label: "Followers" },
        ],
      },
      { label: "Account", icon: FileText, section: "account" },
      { label: "Corporate", icon: Building, section: "corporate" },
      { label: "Blog", icon: BookOpen, section: "blog" },
      { label: "Social", icon: Share2, section: "social" },
    ],
  };

  // Common styles
  const styles = {
    activeLink: "text-blue-600 bg-blue-50 font-medium",
    inactiveLink: "text-gray-700 hover:bg-gray-50",
    activeChild: "text-blue-600 bg-blue-50",
    inactiveChild: "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
    activeBorder: "absolute left-0 top-0 w-1 h-full bg-gray-800 rounded-r-sm",
  };

  // Render nav link with consistent styling
  const renderNavLink = ({ to, label, icon: Icon, iconSize = 16, isChild = false }) => (
    <li className="relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-${isChild ? "1.5" : "2"} rounded-md transition-colors relative ${
            isActive
              ? isChild ? styles.activeChild : styles.activeLink
              : isChild ? styles.inactiveChild : styles.inactiveLink
          } ${isChild ? "text-sm" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <div className={styles.activeBorder}></div>}
            {Icon && (
              <Icon 
                size={iconSize} 
                className={`${isActive ? "ml-1" : ""} ${iconSize === 4 ? "fill-current" : ""}`} 
              />
            )}
            <span className={!Icon && isActive ? "ml-1" : ""}>{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );

  // Render collapsible section
  const renderCollapsibleSection = (item) => (
    <li key={item.label}>
      <div
        className="flex items-center justify-between px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
        onClick={() => toggleSection(item.section)}
      >
        <div className="flex items-center gap-3">
          <item.icon size={16} />
          <span>{item.label}</span>
        </div>
        {collapsedSections[item.section] ? (
          <ChevronRight size={14} className="text-gray-400" />
        ) : (
          <ChevronDown size={14} className="text-gray-400" />
        )}
      </div>
      {!collapsedSections[item.section] && item.children && (
        <ul className="ml-6 mt-1 space-y-1">
          {item.children.map((child, index) => 
            child.to ? (
              renderNavLink({ ...child, isChild: true })
            ) : (
              <li key={index}>
                <div className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md cursor-pointer transition-colors">
                  {child.label}
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );

  // Render navigation section
  const renderNavSection = (title, items) => (
    <div className="mb-6">
      <div className="text-xs text-gray-500 uppercase mb-3 px-3 font-medium">
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((item) =>
          item.section ? renderCollapsibleSection(item) : renderNavLink(item)
        )}
      </ul>
    </div>
  );

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center text-white text-xs font-bold">
            B
          </div>
          <span className="font-semibold text-gray-900">ByeWind</span>
        </div>
      </div>

      <nav className="flex-1 px-3 overflow-y-auto text-sm">
        {renderNavSection("Favorites", navigationConfig.favorites)}
        {renderNavSection("Dashboards", navigationConfig.dashboards)}
        <div>
          <div className="text-xs text-gray-500 uppercase mb-3 px-3 font-medium">
            Pages
          </div>
          <ul className="space-y-1">
            {navigationConfig.pages.map((item) => renderCollapsibleSection(item))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
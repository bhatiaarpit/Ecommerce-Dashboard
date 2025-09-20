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
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Mock location for demonstration - replace with actual router logic
  const location = { pathname: "/" };

  // State for collapsible sections
  const [collapsedSections, setCollapsedSections] = useState({
    ecommerce: false, // Start expanded to show the new section
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

  const CollapsibleSection = ({
    title,
    sectionKey,
    children,
    isSubSection = false,
  }) => {
    const isCollapsed = collapsedSections[sectionKey];
    const ChevronIcon = isCollapsed ? ChevronRight : ChevronDown;

    return (
      <div className={isSubSection ? "" : "mb-6"}>
        <div
          className={`flex items-center justify-between cursor-pointer ${
            isSubSection
              ? "px-2 py-1 hover:bg-gray-100"
              : "text-xs text-gray-400 uppercase mb-2"
          }`}
          onClick={() => toggleSection(sectionKey)}
        >
          <span className={isSubSection ? "flex items-center gap-2" : ""}>
            {isSubSection && <FileText size={16} />}
            {title}
          </span>
          {!isSubSection && <ChevronIcon size={12} className="text-gray-400" />}
          {isSubSection && <ChevronIcon size={12} className="text-gray-400" />}
        </div>
        {!isCollapsed && (
          <div className={isSubSection ? "ml-6 space-y-1 text-gray-600" : ""}>
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-400 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 font-bold text-xl">ByeWind</div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto text-sm">
        {/* Favorites */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 uppercase mb-2">Favorites</div>
          <ul className="space-y-1">
            <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              <NavLink
                to="/overview"
                className={({ isActive }) =>
                  `px-2 py-1 rounded hover:bg-gray-100 cursor-pointer ${
                    isActive ? "text-blue-600 bg-blue-50" : ""
                  }`
                }
              >
                Overview
              </NavLink>
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              Projects
            </li>
          </ul>
        </div>

        {/* Dashboards */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 uppercase mb-2">Dashboards</div>
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 rounded font-medium ${
                    isActive ? "text-blue-600 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <LayoutDashboard size={16} /> Default
              </NavLink>
            </li>

            {/* eCommerce - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("ecommerce")}
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart size={16} /> eCommerce
                </div>
                {collapsedSections.ecommerce ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.ecommerce && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "hover:text-black"
                        }`
                      }
                    >
                      <TrendingUp size={14} />
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/orders"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "hover:text-black"
                        }`
                      }
                    >
                      <ShoppingBag size={14} />
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/customers"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "hover:text-black"
                        }`
                      }
                    >
                      <Users size={14} />
                      Customers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "hover:text-black"
                        }`
                      }
                    >
                      <Package size={14} />
                      Products
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 rounded font-medium ${
                    isActive ? "text-blue-600 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <Briefcase size={16} /> Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/online-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 rounded font-medium ${
                    isActive ? "text-blue-600 bg-blue-50" : "hover:bg-gray-100"
                  }`
                }
              >
                <PlayCircle size={16} /> Online Courses
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <div className="text-xs text-gray-400 uppercase mb-2">Pages</div>
          <ul className="space-y-1">
            {/* User Profile - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("userProfile")}
              >
                <div className="flex items-center gap-2">
                  <User size={16} /> User Profile
                </div>
                {collapsedSections.userProfile ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.userProfile && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li className="hover:text-black cursor-pointer">Overview</li>
                  <li className="hover:text-black cursor-pointer">Projects</li>
                  <li className="hover:text-black cursor-pointer">Campaigns</li>
                  <li className="hover:text-black cursor-pointer">Documents</li>
                  <li className="hover:text-black cursor-pointer">Followers</li>
                </ul>
              )}
            </li>

            {/* Account - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("account")}
              >
                <div className="flex items-center gap-2">
                  <FileText size={16} /> Account
                </div>
                {collapsedSections.account ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.account && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li className="hover:text-black cursor-pointer">
                    Profile Settings
                  </li>
                  <li className="hover:text-black cursor-pointer">Security</li>
                  <li className="hover:text-black cursor-pointer">Billing</li>
                  <li className="hover:text-black cursor-pointer">
                    Notifications
                  </li>
                  <li className="hover:text-black cursor-pointer">Privacy</li>
                </ul>
              )}
            </li>

            {/* Corporate - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("corporate")}
              >
                <div className="flex items-center gap-2">
                  <Building size={16} /> Corporate
                </div>
                {collapsedSections.corporate ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.corporate && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li className="hover:text-black cursor-pointer">
                    Company Profile
                  </li>
                  <li className="hover:text-black cursor-pointer">
                    Team Members
                  </li>
                  <li className="hover:text-black cursor-pointer">
                    Departments
                  </li>
                  <li className="hover:text-black cursor-pointer">Policies</li>
                  <li className="hover:text-black cursor-pointer">Reports</li>
                </ul>
              )}
            </li>

            {/* Blog - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("blog")}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={16} /> Blog
                </div>
                {collapsedSections.blog ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.blog && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li className="hover:text-black cursor-pointer">All Posts</li>
                  <li className="hover:text-black cursor-pointer">
                    Create Post
                  </li>
                  <li className="hover:text-black cursor-pointer">
                    Categories
                  </li>
                  <li className="hover:text-black cursor-pointer">Tags</li>
                  <li className="hover:text-black cursor-pointer">Comments</li>
                </ul>
              )}
            </li>

            {/* Social - Collapsible */}
            <li>
              <div
                className="flex items-center justify-between px-2 py-1 font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => toggleSection("social")}
              >
                <div className="flex items-center gap-2">
                  <Share2 size={16} /> Social
                </div>
                {collapsedSections.social ? (
                  <ChevronRight size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </div>
              {!collapsedSections.social && (
                <ul className="ml-6 space-y-1 text-gray-600">
                  <li className="hover:text-black cursor-pointer">Feed</li>
                  <li className="hover:text-black cursor-pointer">Friends</li>
                  <li className="hover:text-black cursor-pointer">Groups</li>
                  <li className="hover:text-black cursor-pointer">Events</li>
                  <li className="hover:text-black cursor-pointer">Messages</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

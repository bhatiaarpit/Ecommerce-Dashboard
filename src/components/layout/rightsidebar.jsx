import React from "react";
import { Bell, Activity, Users, Bug, UserPlus, X } from "lucide-react"; // added X for close

const notifications = [
  { text: "You have a bug that needs attention", time: "Just now", type: "bug" },
  { text: "New user registered", time: "59 minutes ago", type: "user" },
  { text: "Bug reported in project", time: "12 hours ago", type: "bug" },
  { text: "Andi Lane subscribed to you", time: "Today, 11:59 AM", type: "subscribe" },
];

const activities = [
  { text: "Pushed new version to repo", time: "Just now", avatar: "https://i.pravatar.cc/40?img=1" },
  { text: "Released a new version", time: "59 minutes ago", avatar: "https://i.pravatar.cc/40?img=2" },
  { text: "Submitted a bug", time: "12 hours ago", avatar: "https://i.pravatar.cc/40?img=3" },
  { text: "Modified data in Page X", time: "Today, 11:59 AM", avatar: "https://i.pravatar.cc/40?img=4" },
  { text: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "https://i.pravatar.cc/40?img=5" },
];

const contacts = [
  { name: "Natali Craig", color: "bg-gray-300" },
  { name: "Drew Cano", color: "bg-red-400" },
  { name: "Orlando Diggs", color: "bg-yellow-400" },
  { name: "Andi Lane", color: "bg-blue-400" },
  { name: "Kate Morrison", color: "bg-green-400" },
  { name: "Koray Okumus", color: "bg-teal-400" },
];

const getNotificationIcon = (type) => {
  switch (type) {
    case "bug":
      return <Bug size={16} className="text-red-500" />;
    case "user":
      return <Users size={16} className="text-blue-500" />;
    case "subscribe":
      return <UserPlus size={16} className="text-green-500" />;
    default:
      return <Bell size={16} className="text-gray-500" />;
  }
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="flex items-center gap-2 font-semibold text-gray-700 text-base mb-4 pb-2">
      {title}
    </h2>
    {children}
  </div>
);

const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 px-5 py-5 flex flex-col overflow-y-auto z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold"></h2>
          <X className="cursor-pointer text-gray-500" onClick={onClose} />
        </div>

        {/* Notifications */}
        <Section title="Notifications">
          <ul className="space-y-3">
            {notifications.map((n, i) => (
              <li
                key={i}
                className="flex items-start justify-between text-sm bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                <div className="flex items-center gap-2">
                  {getNotificationIcon(n.type)}
                  <span className="text-gray-700">{n.text}</span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {n.time}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Activities */}
        <Section title="Activities">
          <ul className="space-y-3">
            {activities.map((a, i) => (
              <li
                key={i}
                className="flex justify-between items-center text-sm bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                <div className="flex items-center gap-3">
                  <img src={a.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                  <span className="text-gray-700">{a.text}</span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {a.time}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contacts */}
        <Section title="Contacts">
          <ul className="space-y-3">
            {contacts.map((c, i) => (
              <li
                key={i}
                className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition"
              >
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-3 ${c.color}`}
                ></span>
                <span className="text-sm text-gray-700">{c.name}</span>
              </li>
            ))}
          </ul>
        </Section>
      </aside>
    </>
  );
};

export default RightSidebar;

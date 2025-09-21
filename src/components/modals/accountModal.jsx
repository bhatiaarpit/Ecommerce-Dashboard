import React, { useState } from 'react';
import {
  X,
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Edit3,
  Moon,
  Globe,
  Key
} from 'lucide-react';

const AccountModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(true);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const menuItems = [
    {
      id: 'profile',
      label: 'My Profile',
      icon: User,
      description: 'Manage your personal information'
    },
    {
      id: 'settings',
      label: 'Account Settings',
      icon: Settings,
      description: 'Privacy, security, and preferences'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      description: 'Email and push notification settings'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      description: 'Password and two-factor authentication'
    },
    {
      id: 'billing',
      label: 'Billing & Payments',
      icon: CreditCard,
      description: 'Manage your subscription and payments'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle,
      description: 'Get help and contact support'
    }
  ];

  const renderProfile = () => {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto text-white text-4xl font-bold mb-4">
            AB
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Arpit Bhatia</h2>
          <p className="text-gray-600 dark:text-gray-300">arpit@example.com</p>
          <button className="mt-2 px-4 py-2 bg-gray-100 dark:bg-[#2c3043] dark:hover:bg-[#3d4158] hover:bg-gray-200 rounded-md text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center space-x-2">
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>

          <form className="mt-6 space-y-4 text-left text-gray-900 dark:text-gray-100">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" defaultValue="Arpit Bhatia" className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-[#232c3a] focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" defaultValue="arpit@example.com" className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-[#232c3a] focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <input type="text" defaultValue="Frontend Developer" className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-white dark:bg-[#232c3a] focus:ring-blue-500 focus:outline-none" />
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderSettings = () => {
    return (
      <div className="p-6 space-y-6 text-gray-900 dark:text-gray-100">
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 py-4">
          <div className="flex items-center space-x-3">
            <Moon className="w-6 h-6" />
            <div>
              <p className="font-semibold">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Use dark theme</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 relative transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"></div>
          </label>
        </div>
        {/* Additional settings sections as needed */}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfile();
      case 'settings':
        return renderSettings();
      // Add further tabs rendering here.
      default:
        return renderProfile();
    }
  };

  return (
    <div className="fixed inset-0 z-50" onClick={handleOverlayClick}>
      <div className="fixed inset-0 bg-black/40 bg-opacity-50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-[#232c3a] rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          <header className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 p-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Account</h1>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-[#3d4158] transition-colors">
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </header>
          <div className="flex h-[calc(90vh_-_56px)] overflow-hidden">
            <aside className="w-64 bg-white dark:bg-[#262c38] border-r border-gray-300 dark:border-gray-700 p-4 flex flex-col justify-between">
              <nav>
                {menuItems.map(({ id, label, icon: Icon, description }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center p-3 rounded-md mb-2 text-left transition-colors ${
                      id === activeTab
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3d4158]'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">{label}</p>
                      <p className="text-xs">{description}</p>
                    </div>
                  </button>
                ))}
              </nav>
              <div>
                <button
                  onClick={() => alert('Signing out...')}
                  className="w-full flex items-center p-3 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out
                </button>
              </div>
            </aside>
            <main className="flex-1 bg-white dark:bg-[#232c3a] overflow-auto">
              {renderContent()}
            </main>
          </div>
          <footer className="flex justify-end p-4 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#2c3043]">
            <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#3d4158] hover:bg-gray-200 dark:hover:bg-[#3d4158] text-gray-900 dark:text-gray-300">
              Cancel
            </button>
            <button className="ml-3 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
              Save Changes
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;

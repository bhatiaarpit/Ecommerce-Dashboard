// components/modals/AccountModal.js
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

    const ProfileSection = () => (
        <div className="p-6">
            <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    AB
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Arpit Bhatia</h3>
                <p className="text-sm text-gray-600">arpit@example.com</p>
                <button className="mt-2 inline-flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
                    <Edit3 className="w-4 h-4 mr-1" />
                    Edit Profile
                </button>
            </div>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                        type="text" 
                        defaultValue="Arpit Bhatia"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                        type="email" 
                        defaultValue="arpit@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <input 
                        type="text" 
                        defaultValue="Frontend Developer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );

    const SettingsSection = () => (
        <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center">
                    <Moon className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Dark Mode</p>
                        <p className="text-xs text-gray-600">Switch to dark theme</p>
                    </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Language</p>
                        <p className="text-xs text-gray-600">English (US)</p>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center">
                    <Key className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">Privacy</p>
                        <p className="text-xs text-gray-600">Manage data and privacy settings</p>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileSection />;
            case 'settings':
                return <SettingsSection />;
            case 'notifications':
                return (
                    <div className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                                    <p className="text-xs text-gray-600">Receive updates via email</p>
                                </div>
                                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                                    <p className="text-xs text-gray-600">Receive push notifications</p>
                                </div>
                                <input type="checkbox" className="rounded border-gray-300" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Marketing Emails</p>
                                    <p className="text-xs text-gray-600">Receive promotional content</p>
                                </div>
                                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                            </div>
                        </div>
                    </div>
                );
            case 'security':
                return (
                    <div className="p-6 space-y-4">
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Change Password</p>
                            <p className="text-xs text-gray-600">Update your account password</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                            <p className="text-xs text-gray-600">Add extra security to your account</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Active Sessions</p>
                            <p className="text-xs text-gray-600">Manage your active login sessions</p>
                        </button>
                    </div>
                );
            case 'billing':
                return (
                    <div className="p-6 space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-900">Current Plan: Pro</p>
                            <p className="text-xs text-gray-600">$29/month • Next billing: Jan 15, 2024</p>
                        </div>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Payment Methods</p>
                            <p className="text-xs text-gray-600">Manage cards and payment options</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Billing History</p>
                            <p className="text-xs text-gray-600">View past invoices and receipts</p>
                        </button>
                    </div>
                );
            case 'help':
                return (
                    <div className="p-6 space-y-4">
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Help Center</p>
                            <p className="text-xs text-gray-600">Browse help articles and guides</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Contact Support</p>
                            <p className="text-xs text-gray-600">Get help from our support team</p>
                        </button>
                        <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-900">Report a Bug</p>
                            <p className="text-xs text-gray-600">Let us know about any issues</p>
                        </button>
                    </div>
                );
            default:
                return <ProfileSection />;
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Account</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200">
                        <nav className="p-4 space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                                            activeTab === item.id
                                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                : 'hover:bg-gray-100'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            <Icon className="w-5 h-5 mr-3" />
                                            <div>
                                                <p className="text-sm font-medium">{item.label}</p>
                                                <p className="text-xs text-gray-600 hidden sm:block">{item.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Logout Button */}
                        <div className="p-4 border-t border-gray-200">
                            <button className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-lg">
                                <LogOut className="w-5 h-5 mr-3" />
                                <span className="text-sm font-medium">Sign Out</span>
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 overflow-y-auto max-h-[calc(90vh-80px)]">
                        {renderContent()}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;

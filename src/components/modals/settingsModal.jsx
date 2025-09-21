// components/modals/SettingsModal.js
import React, { useState } from 'react';
import {
    X,
    Moon,
    Sun,
    Bell,
    Volume2,
    Globe,
    Palette,
    Monitor
} from 'lucide-react';

const settingsModal = ({ isOpen, onClose }) => {
    const [theme, setTheme] = useState('system');
    const [notifications, setNotifications] = useState(true);
    const [sounds, setSounds] = useState(false);
    const [language, setLanguage] = useState('en');

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                    {/* Theme Settings */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Theme
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => setTheme('light')}
                                className={`flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 ${
                                    theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                }`}
                            >
                                <Sun className="w-5 h-5 mb-1" />
                                <span className="text-xs">Light</span>
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 ${
                                    theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                }`}
                            >
                                <Moon className="w-5 h-5 mb-1" />
                                <span className="text-xs">Dark</span>
                            </button>
                            <button
                                onClick={() => setTheme('system')}
                                className={`flex flex-col items-center p-3 border rounded-lg hover:bg-gray-50 ${
                                    theme === 'system' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                }`}
                            >
                                <Monitor className="w-5 h-5 mb-1" />
                                <span className="text-xs">System</span>
                            </button>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Bell className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Notifications</p>
                                <p className="text-xs text-gray-600">Show desktop notifications</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                                className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* Sound */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Volume2 className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Sound Effects</p>
                                <p className="text-xs text-gray-600">Play sounds for actions</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={sounds}
                                onChange={(e) => setSounds(e.target.checked)}
                                className="sr-only peer" 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    {/* Language */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Globe className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Language</p>
                                <p className="text-xs text-gray-600">Interface language</p>
                            </div>
                        </div>
                        <select 
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="hi">Hindi</option>
                        </select>
                    </div>

                    {/* Auto-save indicator */}
                    <div className="pt-2 border-t border-gray-200">
                        <div className="flex items-center text-xs text-gray-600">
                            <Palette className="w-4 h-4 mr-2" />
                            Settings are saved automatically
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default settingsModal;

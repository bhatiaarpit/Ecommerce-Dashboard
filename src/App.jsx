import './App.css';
import React from 'react';
import Sidebar from './components/layout/sidebar';
import RightSidebar from './components/layout/rightSidebar';
import Dashboard from './pages/dashboard';
import Projects from './pages/projects';
import OnlineCourses from './pages/onlineCourses';
import OrderList from './pages/orderList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Topbar from './components/layout/topbar';
import SettingsModal from './components/modals/settingsModal';
import AccountModal from './components/modals/accountModal';
import Customers from './pages/customer';
import Products from './pages/products';
import Overview from './pages/overview';
import Header from './components/layout/header';
import MobileMenu from './components/layout/mobile-menu';


function App() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleRightSidebar = () => setIsRightSidebarOpen((prev) => !prev);
  const toggleSettingsModal = () => setIsSettingsOpen((prev) => !prev);
  const toggleAccountModal = () => setIsAccountOpen((prev) => !prev);
  const handleToggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // On initial mount, set dark mode from localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Router>
      <div className="bg-gray-50 flex">
        {/* Sidebar: hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Mobile Header */}
        <Header onToggleMenu={handleToggleMobileMenu} />
        {/* Mobile Menu Drawer */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleToggleMobileMenu}>
          <Sidebar />
        </MobileMenu>
        <div className="flex-1 md:pl-64 flex flex-col h-screen overflow-y-auto">
          <Topbar
            onToggleRightSidebar={toggleRightSidebar}
            onToggleSettings={toggleSettingsModal}
            onToggleAccount={toggleAccountModal}
          />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/online-courses" element={<OnlineCourses />} />
              <Route path="/orders" element={<OrderList />} /> {/* Add this route */}
              {/* Alternative nested routes for better organization */}
              <Route path="/ecommerce" element={<Dashboard />} />
              <Route path="/ecommerce/orders" element={<OrderList />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar isOpen={isRightSidebarOpen} onClose={toggleRightSidebar} />

        {/* Modals */}
        <SettingsModal isOpen={isSettingsOpen} onClose={toggleSettingsModal} />
        <AccountModal isOpen={isAccountOpen} onClose={toggleAccountModal} />
      </div>
    </Router>
  );
}

export default App;

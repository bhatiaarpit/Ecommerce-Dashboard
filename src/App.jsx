import './App.css';
import Sidebar from './components/layout/Sidebar';
import RightSidebar from './components/layout/rightSidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import OnlineCourses from './pages/OnlineCourses';
import OrderList from './pages/OrderList'; // Add this import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Topbar from './components/layout/Topbar';
import SettingsModal from './components/modals/SettingsModal';
import AccountModal from './components/modals/AccountModal';
import Customers from './pages/customer';
import Products from './pages/products';
import Overview from './pages/overview';


function App() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleRightSidebar = () => setIsRightSidebarOpen((prev) => !prev);
  const toggleSettingsModal = () => setIsSettingsOpen((prev) => !prev);
  const toggleAccountModal = () => setIsAccountOpen((prev) => !prev);

  return (
    <Router>
      <div className="bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 pl-64 flex flex-col h-screen overflow-y-auto">
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

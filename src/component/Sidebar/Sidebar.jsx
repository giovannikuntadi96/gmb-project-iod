import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LayoutDashboard, BetweenHorizontalStart, UserCheck  } from 'lucide-react'; // Import icons
import './Sidebar.css';

const Sidebar = () => {
    const currentPath = window.location.pathname; // Get current path

    return (
        <div className="sidebar">
            <a href="/dashboard" className={`sidebar-item ${currentPath === '/dashboard' ? 'active' : ''}`}>
                <LayoutDashboard size="24" className="icon" /> {/* Adjust size as needed */}
                <span className="icon-label">Dashboard</span>
            </a>
            <a href="/feature1" className={`sidebar-item ${currentPath === '/feature1' ? 'active' : ''}`}>
                <BetweenHorizontalStart size="24" className="icon" /> {/* Adjust size as needed */}
                <span className="icon-label">Explore</span>
            </a>
            <a href="/account" className={`account-icon ${currentPath === '/account' ? 'active' : ''}`}>
                <UserCheck size="24" className="icon" /> {/* Adjust size as needed */}
                <span className="icon-label">Account</span>
            </a>
            {/* Add more icons as needed */}
        </div>
    );
}

export default Sidebar;

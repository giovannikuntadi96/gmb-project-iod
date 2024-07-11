import React from 'react';
import './Header.css'; // Import CSS for styling
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header className="header">
            {/* Logo */}
            <img src={logo} alt="Logo" className="logo-img" />
            {/* App name */}
            <div className="app-name">
                KonnectPro
            </div>
            {/* Navigasi menu */}
            
        </header>
    );
}

export default Header;

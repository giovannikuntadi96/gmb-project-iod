import React, { useState } from 'react';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchBar = ({ onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchQuery); // Pass the search query to the parent component on submit
    };

    return (
        <div className="search-component">
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    placeholder="Search..." 
                />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

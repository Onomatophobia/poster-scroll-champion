
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-poster/90 backdrop-blur-sm border-b border-poster-border py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold flex-1">
          POSTER CHAMPION
        </h1>
        
        <div className="flex-1 flex justify-center">
          {searchOpen ? (
            <SearchBar onClose={() => setSearchOpen(false)} />
          ) : (
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className="ml-2 hidden sm:inline">Search posters...</span>
            </button>
          )}
        </div>
        
        <div className="flex-1"></div>
      </div>
    </header>
  );
};

export default Header;

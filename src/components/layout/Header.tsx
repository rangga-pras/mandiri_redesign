import React, { useState } from 'react';
import { Search, MapPin, Menu, X, Lock, Calculator, User } from 'lucide-react';

interface HeaderProps {
  currentPage: 'individual' | 'help';
  setCurrentPage: (page: 'individual' | 'help') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="bg-yellow-400 h-[3px]" />

      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-1 hidden md:flex justify-between items-center">
        {/* Left Side: Language Selector - hidden on mobile */}
        <div className="flex items-center text-xs text-gray-500 space-x-1">
          <span className="text-gray-400">ID</span>
          <span>|</span>
          <span className="text-blue-700 font-semibold">EN</span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Type to search"
              className="w-full pl-8 pr-4 py-1.5 rounded bg-gray-100 text-sm placeholder-gray-400"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Right Side: Icons + Login */}
        <div className="flex items-center space-x-3">
          <Calculator className="w-4 h-4 text-blue-800" />
          <MapPin className="w-4 h-4 text-blue-800" />
          <User className="w-4 h-4 text-blue-800" />
          <button className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-yellow-300 flex items-center space-x-1">
            <Lock className="w-4 h-4" />
            <span>Log In</span>
          </button>
        </div>
      </div>

      {/* Top Mobile Bar: Right aligned icons and login */}
      <div className="md:hidden flex justify-end items-center px-4 pt-2 pb-1 space-x-3">
        <Calculator className="w-5 h-5 text-blue-800" />
        <MapPin className="w-5 h-5 text-blue-800" />
        <User className="w-5 h-5 text-blue-800" />
        <button className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-yellow-300 flex items-center space-x-1">
          <Lock className="w-5 h-5" />
          <span>Log In</span>
        </button>
      </div>

      {/* Bottom Mobile Bar: Logo + search + hamburger */}
      <div className="md:hidden flex justify-between items-center px-4 pb-2">
        <img src="/assets/layout_set_logo.png" alt="Mandiri" className="h-6 md:h-7" />
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-blue-800" />
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-blue-800" />
          </button>
        </div>
      </div>

      {/* Bottom Header: Logo + Navigation for desktop */}
      <div className="max-w-7xl mx-auto px-4 py-3 hidden md:flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/assets/layout_set_logo.png" alt="Mandiri" className="h-6 md:h-7" />
        </div>

        {/* Navigation aligned right */}
        <nav className="flex space-x-6 text-sm font-medium">
          <button
            onClick={() => setCurrentPage('individual')}
            className={`pb-1 border-b-2 transition-colors ${
              currentPage === 'individual'
                ? 'text-blue-600 border-yellow-400'
                : 'border-transparent text-black hover:text-black hover:border-gray-300'
            }`}
          >
            Individual
          </button>
          <button className="pb-1 border-b-2 border-transparent text-black hover:text-black hover:border-gray-300 transition-colors">
            Business
          </button>
          <button className="pb-1 border-b-2 border-transparent text-yellow-700 hover:text-black hover:border-gray-300 transition-colors">
            Priority
          </button>
          <button className="pb-1 border-b-2 border-transparent text-black hover:text-black hover:border-gray-300 transition-colors">
            About Mandiri
          </button>
          <button
            onClick={() => setCurrentPage('help')}
            className={`pb-1 border-b-2 transition-colors ${
              currentPage === 'help'
                ? 'text-blue-600 border-yellow-400'
                : 'border-transparent text-black hover:text-black hover:border-gray-300'
            }`}
          >
            Help
          </button>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white py-4 px-4 space-y-3 text-sm font-medium relative">
          <button
            onClick={() => {
              setCurrentPage('individual');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left hover:text-yellow-400 transition-colors"
          >
            Individual
          </button>
          <button className="block w-full text-left hover:text-yellow-400 transition-colors">Business</button>
          <button className="block w-full text-left hover:text-yellow-400 transition-colors">Priority</button>
          <button className="block w-full text-left hover:text-yellow-400 transition-colors">About Mandiri</button>
          <button
            onClick={() => {
              setCurrentPage('help');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left hover:text-yellow-400 transition-colors"
          >
            Help
          </button>
          <div className="flex justify-center space-x-2 text-xs pt-4 border-t border-blue-700 text-blue-300">
            <span>ID</span>
            <span>|</span>
            <span>EN</span>
          </div>
          <button
            className="absolute top-3 right-3 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
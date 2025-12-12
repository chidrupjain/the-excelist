import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageState } from '../types';

interface HeaderProps {
  activePage: PageState;
  onNavigate: (page: PageState) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: PageState.HOME },
    { label: 'Consultancy', value: PageState.CONSULTANCY },
    { label: 'Key Learnings', value: PageState.KEY_LEARNINGS },
    { label: 'Financial Calculators', value: PageState.CALCULATORS },
    { label: 'About & Contact', value: PageState.ABOUT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate(PageState.HOME)}
          >
            <img 
              src="logo.png" 
              alt="The Excelist" 
              className="h-12 w-auto mr-3 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-navy-800 tracking-tight">THE EXCELIST</h1>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Consultancy & Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activePage === item.value
                    ? 'text-navy-800 border-b-2 border-navy-800'
                    : 'text-gray-600 hover:text-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-navy-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activePage === item.value
                    ? 'bg-navy-50 text-navy-800'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
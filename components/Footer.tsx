import React from 'react';
import { PageState } from '../types';

interface FooterProps {
  onNavigate: (page: PageState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">THE EXCELIST</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Mutual Fund Distributors and financial professionals through expert compliance consultancy and world-class education. Directed by Chidrup Jain.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><button onClick={() => onNavigate(PageState.HOME)} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => onNavigate(PageState.CONSULTANCY)} className="hover:text-white transition">Consultancy Services</button></li>
              <li><button onClick={() => onNavigate(PageState.KEY_LEARNINGS)} className="hover:text-white transition">Key Learnings</button></li>
              <li><button onClick={() => onNavigate(PageState.CALCULATORS)} className="hover:text-white transition">Financial Calculators</button></li>
              <li><button onClick={() => onNavigate(PageState.ABOUT)} className="hover:text-white transition">About & Contact</button></li>
              <li><button onClick={() => onNavigate(PageState.PRIVACY)} className="hover:text-white transition">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate(PageState.TERMS)} className="hover:text-white transition">Terms of Use</button></li>
              <li><button onClick={() => onNavigate(PageState.REFUND)} className="hover:text-white transition">Refund Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Email: contact@theexcelist.com</p>
              <p>Phone: +91 94144 28749</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Excelist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
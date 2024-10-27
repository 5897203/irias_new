import React, { useState } from 'react';
import { Globe2, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstituteOpen, setIsInstituteOpen] = useState(false);

  const instituteLinks = [
    'About IRIAS',
    'Council members',
    'Structure and management',
    'Centers',
    'Researches',
    'Partners',
    'International cooperation',
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">IRIAS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            
            {/* Institute Dropdown */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 inline-flex items-center"
                onMouseEnter={() => setIsInstituteOpen(true)}
                onClick={() => setIsInstituteOpen(!isInstituteOpen)}
              >
                Institute
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isInstituteOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setIsInstituteOpen(false)}
                >
                  {instituteLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">History</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Publications</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Events</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">News</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contacts</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              
              {/* Mobile Institute Dropdown */}
              <div className="relative">
                <button
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 flex items-center justify-between"
                  onClick={() => setIsInstituteOpen(!isInstituteOpen)}
                >
                  Institute
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${isInstituteOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isInstituteOpen && (
                  <div className="pl-6 space-y-1">
                    {instituteLinks.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">History</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Publications</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Events</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">News</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contacts</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
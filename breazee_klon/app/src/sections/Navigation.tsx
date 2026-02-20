import { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { navigationConfig } from '@/config';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f0f0f0]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#start" className="flex items-center gap-2 group">
            <img
              src={navigationConfig.logo}
              alt="Breazee"
              className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-medium text-gray-800">
              {navigationConfig.brandName}
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navigationConfig.links.map((link) => (
              <div key={link.label} className="relative">
                {link.label === 'Breathing Techniques' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                        {navigationConfig.dropdownLinks.map((dropdownLink) => (
                          <a
                            key={dropdownLink.label}
                            href={dropdownLink.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            {dropdownLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <button
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

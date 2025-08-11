import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    // { label: 'Blog', id: 'blog' },
    // { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-4 border-black ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_0px_0px_#000]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold transition-all duration-300 transform hover:scale-105 text-black hover:text-gray-800 cursor-pointer border-2 border-black px-3 py-1 hover:shadow-[4px_4px_0px_0px_#000]"
          >
            AA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-black hover:text-gray-800 cursor-pointer border-b-2 border-transparent hover:border-black"
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 border-2 border-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 text-black hover:shadow-[4px_4px_0px_0px_#000] cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-all duration-300 transform hover:scale-110 text-black border-2 border-black p-2 hover:shadow-[4px_4px_0px_0px_#000] cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] animate-slide-down bg-white manga-panel">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 font-bold transition-all duration-300 transform hover:translate-x-2 text-black hover:text-gray-800 cursor-pointer border-b border-black"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="text-left py-2 font-bold transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2 text-black hover:text-gray-800 cursor-pointer"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'White Paper' : 'Black Ink'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
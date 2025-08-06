import React from 'react';
import { Heart, Code2, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-4"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-1"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="animate-slide-up">
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'from-white to-gray-300' 
                  : 'from-black to-gray-600'
              }`}>
                Aditya Agrawal
              </h3>
              <p className={`mb-4 leading-relaxed transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full Stack Developer with expertise in React.js, Node.js, and cloud technologies. 
                Building scalable web applications and modern digital solutions.
              </p>
              <div className={`flex items-center transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" />
                <span>and</span>
                <Code2 className="w-4 h-4 ml-1 animate-bounce" />
                <span className="ml-2">+</span>
                <Coffee className="w-4 h-4 ml-1 animate-float" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Blog', id: 'blog' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block transition-all duration-300 transform hover:translate-x-2 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>Services</h4>
              <div className={`space-y-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {['Full Stack Development', 'Cloud Solutions', 'API Development', 'Database Design'].map((service, index) => (
                  <p key={index} className="transform hover:translate-x-2 transition-all duration-300 hover:scale-105">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t pt-8 text-center transition-colors duration-500 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <p className={`transition-colors duration-500 animate-fade-in ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © {currentYear} Aditya Agrawal. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
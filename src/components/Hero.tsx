import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center relative overflow-hidden transition-all duration-500 pt-20 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white'
      }`}
    >
      {/* Manga Background Panels */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-1"></div>
        <div className="manga-frame frame-2"></div>
        <div className="manga-frame frame-3"></div>
        <div className="manga-frame frame-4"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-1"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-1"></div>
        <div className="jagged-panel jagged-2"></div>
        <div className={`impact-lines ${theme === 'dark' ? 'text-white' : 'text-black'}`}></div>
      </div>

      {/* Speed Lines Effect */}
      <div className={`speed-lines ${theme === 'dark' ? 'text-white' : 'text-black'}`} id="speed-lines"></div>

      {/* Background Pattern */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}>
        <div className="halftone w-full h-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 animate-float opacity-30 hover:opacity-60 transition-opacity duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          <Sparkles size={24} />
        </div>
        <div className={`absolute top-40 right-20 animate-float opacity-30 hover:opacity-60 transition-opacity duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`} style={{ animationDelay: '2s' }}>
          <Sparkles size={32} />
        </div>
        <div className={`absolute bottom-40 left-20 animate-float opacity-30 hover:opacity-60 transition-opacity duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`} style={{ animationDelay: '4s' }}>
          <Sparkles size={20} />
        </div>
        <div className={`absolute top-60 left-1/2 animate-float opacity-20 hover:opacity-40 transition-opacity duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`} style={{ animationDelay: '1s' }}>
          <Sparkles size={16} />
        </div>
        <div className={`absolute bottom-60 right-10 animate-float opacity-25 hover:opacity-45 transition-opacity duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`} style={{ animationDelay: '3s' }}>
          <Sparkles size={28} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Hi, I'm{' '}
              <span className="relative inline-block">
                Aditya Agrawal
                <div className={`absolute -bottom-2 left-0 right-0 h-1 transform scale-x-0 transition-transform duration-500 animate-slide-right ${
                  theme === 'dark' ? 'bg-white' : 'bg-black'
                }`}></div>
              </span>
            </h1>
            <div className={`relative p-6 rounded-2xl border-4 mb-8 animate-slide-up ${
              theme === 'dark' 
                ? 'bg-black border-white text-white' 
                : 'bg-white border-black text-black'
            }`} style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
                A passionate Full Stack Developer with 5+ years of experience building scalable web applications 
                with cutting-edge technologies and creative problem-solving approaches.
              </p>
              {/* Speech bubble tail */}
              <div className={`absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent ${
                theme === 'dark' ? 'border-t-white' : 'border-t-black'
              }`}></div>
            </div>
            <p className={`text-lg mb-8 font-medium animate-slide-up ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`} style={{ animationDelay: '0.3s' }}>
              "Bringing creativity and innovation to the digital world through code!"
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-4 font-bold border-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-bounce-in cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-white text-black border-white hover:shadow-[8px_8px_0px_0px_#fff]' 
                  : 'bg-black text-white border-black hover:shadow-[8px_8px_0px_0px_#000]'
              }`}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 font-bold border-4 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-bounce-in cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-black text-white border-white hover:shadow-[8px_8px_0px_0px_#fff]' 
                  : 'bg-white text-black border-black hover:shadow-[8px_8px_0px_0px_#000]'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-slide-up flex space-x-6" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/adityaagrawal"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 cursor-pointer ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aditya-agrawal"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 cursor-pointer ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aditya.agrawal@example.com"
              className={`transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 cursor-pointer ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 animate-bounce hover:scale-125 cursor-pointer ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
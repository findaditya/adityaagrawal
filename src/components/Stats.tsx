import React, { useState, useEffect } from 'react';
import { Code, Users, Coffee, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Stats = () => {
  const { theme } = useTheme();
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    awards: 0
  });

  const finalValues = {
    projects: 25,
    clients: 15,
    coffee: 500,
    awards: 8
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      icon: Code,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful web applications delivered'
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Coffee,
      value: counters.coffee,
      suffix: '+',
      label: 'Cups of Coffee',
      description: 'Fuel for coding sessions'
    },
    {
      icon: Award,
      value: counters.awards,
      suffix: '',
      label: 'Certifications',
      description: 'Professional achievements'
    }
  ];

  return (
    <section className={`py-20 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-1"></div>
        <div className="manga-frame frame-4"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="jagged-panel jagged-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              By the Numbers
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A snapshot of my journey in full-stack development and the impact I've made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-bounce-in ${
                  theme === 'dark' 
                    ? 'bg-black border border-gray-800 hover:border-white hover:shadow-2xl' 
                    : 'bg-white border border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-16px) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${
                  theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  <stat.icon size={32} />
                </div>
                
                <div className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {stat.value}{stat.suffix}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {stat.label}
                </h3>
                
                <p className={`text-sm transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
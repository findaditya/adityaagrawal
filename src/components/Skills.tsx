import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, Award, Target } from 'lucide-react';

const Skills = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Redux', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: <Award className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 78 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-1"></div>
        <div className="manga-frame frame-3"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="jagged-panel jagged-1"></div>
        <div className={`impact-lines ${theme === 'dark' ? 'text-white' : 'text-black'}`}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Skills & Expertise
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive toolkit of modern technologies and tools that I use to 
              bring ideas to life and solve complex problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`p-8 rounded-2xl animate-slide-up transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group ${
                  theme === 'dark' 
                    ? 'bg-gray-900 hover:bg-gray-800 border border-gray-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="transform hover:translate-x-2 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium transition-colors duration-500 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>{skill.name}</span>
                        <span className={`text-sm transition-colors duration-500 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out hover:animate-pulse ${
                            theme === 'dark' 
                              ? 'bg-gradient-to-r from-white to-gray-300' 
                              : 'bg-gradient-to-r from-black to-gray-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scaleY(1.5)';
                            e.target.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scaleY(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
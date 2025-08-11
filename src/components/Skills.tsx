import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, Award, Target } from 'lucide-react';

const Skills = () => {
  const { theme } = useTheme();

  // Updated categories + skills (levels kept for bar width, but % text removed)
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        { name: 'React.js • Next.js', level: 92 },
        { name: 'Angular (MFEs)', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'TailwindCSS', level: 86 },
        { name: 'Redux', level: 82 },
        { name: 'React Native', level: 78 },
        { name: 'Flutter (Dart)', level: 80 },
        { name: 'Android (Kotlin/Java)', level: 84 },
      ],
    },
    {
      title: 'Backend & Data',
      icon: <Award className="w-6 h-6" />,
      skills: [
        { name: 'Java • Spring Boot', level: 90 },
        { name: 'Node.js • Express.js', level: 88 },
        { name: 'GraphQL • REST APIs', level: 78 },
        { name: 'PostgreSQL', level: 86 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis • Kafka • RabbitMQ', level: 80 },
        { name: 'ElasticSearch', level: 74 },
        { name: 'JWT • AuthN/Z', level: 84 },
      ],
    },
    {
      title: 'Cloud, DevOps & Security',
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: 'AWS (S3, IoT)', level: 85 },
        { name: 'Docker • Kubernetes', level: 82 },
        { name: 'Git • GitLab CI/CD', level: 78 },
        { name: 'Linux • Nginx • Apache', level: 80 },
        { name: 'Keycloak', level: 76 },
        { name: 'MQTT', level: 78 },
        { name: 'WebRTC', level: 72 },
        { name: 'Payments (Stripe/Razorpay)', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
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
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Skills & Expertise
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              A comprehensive toolkit across frontend, backend, data, mobile/IoT, and DevOps to ship scalable products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`p-8 rounded-2xl animate-slide-up transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group ${
                  theme === 'dark' ? 'bg-gray-900 hover:bg-gray-800 border border-gray-800' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-bold transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={`${category.title}-${skill.name}-${skillIndex}`} className="transform hover:translate-x-2 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                        {/* Removed percentage label */}
                      </div>
                      <div className={`w-full rounded-full h-2 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out hover:animate-pulse ${
                            theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-300' : 'bg-gradient-to-r from-black to-gray-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLDivElement).style.transform = 'scaleY(1.5)';
                            (e.target as HTMLDivElement).style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLDivElement).style.transform = 'scaleY(1)';
                            (e.target as HTMLDivElement).style.boxShadow = 'none';
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

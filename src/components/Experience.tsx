import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Bangalore, India",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      description: "Led development of scalable web applications using React.js and Node.js. Implemented microservices architecture and deployed applications on AWS cloud infrastructure.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 3 developers on multiple projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Developed RESTful APIs serving 10k+ daily requests"
      ],
      technologies: ["React.js", "Node.js", "AWS", "MongoDB", "Docker"],
      website: "#"
    },
    {
      id: 2,
      title: "Junior Full Stack Developer",
      company: "StartupXYZ",
      location: "Mumbai, India",
      duration: "Jun 2022 - Dec 2022",
      type: "Full-time",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications from scratch",
        "Integrated third-party APIs and payment gateways",
        "Optimized database queries improving response time by 30%",
        "Mentored 2 junior developers"
      ],
      technologies: ["React.js", "Express.js", "MySQL", "Redux", "Git"],
      website: "#"
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Digital Agency Pro",
      location: "Remote",
      duration: "Jan 2022 - May 2022",
      type: "Internship",
      description: "Gained hands-on experience in frontend development, working on client projects and learning industry best practices.",
      achievements: [
        "Converted 5+ design mockups to responsive web pages",
        "Learned modern development workflows and tools",
        "Collaborated with designers and backend developers",
        "Maintained 99% code quality standards"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Figma"],
      website: "#"
    }
  ];

  return (
    <section id="experience" className={`py-20 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-2"></div>
        <div className="manga-frame frame-4"></div>
        <div className="action-bubble bubble-1"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Professional Experience
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My journey in full-stack development, from internship to leading development teams
              and building scalable applications.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-bounce-in ${
                  theme === 'dark' 
                    ? 'bg-black border border-gray-800 hover:border-white hover:shadow-2xl' 
                    : 'bg-white border border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-8px) rotateY(2deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                }}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-4 top-8 w-8 h-8 rounded-full border-4 transition-all duration-300 group-hover:scale-125 ${
                  theme === 'dark' 
                    ? 'bg-white border-gray-900' 
                    : 'bg-black border-gray-50'
                }`}></div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 group-hover:animate-pulse transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className={`text-lg font-semibold transition-colors duration-500 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {exp.company}
                          </h4>
                          <a 
                            href={exp.website}
                            className={`transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                            }`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        </div>
                        <div className={`flex flex-wrap items-center gap-4 text-sm transition-colors duration-500 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark' 
                              ? 'bg-gray-800 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className={`text-lg font-semibold mb-3 flex items-center gap-2 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}>
                        <Award size={18} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li 
                            key={idx}
                            className={`flex items-start gap-3 transition-all duration-300 hover:translate-x-2 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              theme === 'dark' ? 'bg-white' : 'bg-black'
                            }`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className={`text-lg font-semibold transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                            theme === 'dark' 
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline line */}
          <div className={`absolute left-8 top-32 bottom-32 w-0.5 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`} style={{ zIndex: -1 }}></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
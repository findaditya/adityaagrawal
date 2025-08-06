import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Full Stack E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with React.js, Node.js, and MySQL. Features include user authentication, product management, shopping cart, and secure payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Node.js", "MySQL", "Express.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, user authentication, and responsive design. Built using Socket.io for real-time communication.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Cloud-Based File Storage",
      description: "A secure cloud storage solution with file upload, download, and sharing capabilities. Deployed on AWS with scalable architecture and user management.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "AWS S3", "Node.js", "JWT"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className={`py-20 relative ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} transition-colors duration-300`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-2"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-down">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-bounce-in ${
                  theme === 'dark' 
                    ? 'bg-black border border-gray-800 hover:border-white' 
                    : 'bg-white border border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-8px) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:animate-pulse">
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-full transition-all duration-300 hover:scale-110 ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:rotate-1 ${
                        theme === 'dark' 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'bg-black text-white hover:bg-gray-800'
                      }`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105 hover:-rotate-1 ${
                        theme === 'dark' 
                          ? 'border-white text-white hover:bg-white hover:text-black' 
                          : 'border-black text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
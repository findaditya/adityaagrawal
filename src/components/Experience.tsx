import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      title: "SDE-II (Full Stack Developer)",
      company: "Personify Health | Virgin Pulse",
      location: "Noida, India",
      duration: "2024 - Present",
      type: "Full-time",
      description: "Worked on enterprise-grade applications with a focus on scalability, secure integrations, and performance optimization across frontend and backend systems.",
      achievements: [
        "Developed and integrated TPA form submission for Genesis Web App, enabling seamless data exchange with HealthComp.",
        "Built secure AWS S3 file upload system with Secure File Picker, ensuring compliance with enterprise security standards.",
        "Implemented multi-tier support chat UI in Angular, enabling communication from Tier 1 to Tier 2 agents.",
        "Optimized API response times by 25% using PostgreSQL query optimizations and caching.",
      ],
      technologies: [
        "Angular (MFEs)", 
        "Spring Boot", 
        "PostgreSQL", 
        "Keycloak", 
        "Kafka", 
        "Docker",
        "AWS S3",
        "Secure File Picker",
        "REST APIs"
      ],
      website: "https://personifyhealth.com/"
    },
    {
      id: 2,
      title: "SDE-II (Full Stack Developer - Mobile)",
      company: "Truminds Software Systems",
      location: "Gurgaon, India",
      duration: "2021 - 2024",
      type: "Full-time",
      description: "Led and contributed to multiple large-scale mobile and web products for IoT, e-commerce, and real-time applications.",
      achievements: [
        "SalesHub App: Increased bulk upload speed by 25% via custom QR scanner and improved UX by 20% with real-time WebSocket updates.",
        "IRBlaster: Led a 5-person team to architect the app for scalability and integrated IR communications for remote appliance control.",
        "LynkRemote: Integrated device controls via MQTT, reduced API response times by 50% using Kotlin Flows, and added live aircraft camera streaming.",
        "P2P App: Built socket-based two-way audio streaming between IP cameras and mobile devices using RTSP/RTMP protocols.",
        "SalesHub Web App & Backend: Developed a multi-tenant B2B e-commerce platform with real-time inventory and JWT-secured dealer access.",
      ],
      technologies: [
        "Dart", "Flutter", "HiveDB", "Bloc", "Android", "Kotlin", "MQTT", 
        "ReactJS", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Docker"
      ],
      website: "https://www.truminds.com/"
    },
    {
      id: 3,
      title: "Freelance Developer (Full Stack)",
      company: "Personal Projects",
      location: "Remote",
      duration: "2019 - Present",
      type: "Freelance",
      description: "Designed, developed, and deployed a variety of full-stack applications across e-commerce, AI, and SaaS domains.",
      achievements: [
        "Clothing E-Commerce Platform: Built NextJS SSR platform with Stripe integration, real-time MongoDB inventory, and admin dashboard.",
        "GhostWit: AI-powered ghostwriting app integrating ChatGPT & Whisper voice-to-text transcription.",
        "Faithin: Journaling & prayer app with streaks, localization, multi-theming, and social logins.",
        "Flight Booking System: Built real-time seat booking with Redis, multi-gateway payments, and responsive ReactJS frontend.",
        "All-Purpose E-Commerce: Developed microservices architecture with GraphQL and ElasticSearch, reducing payload size by 40%.",
      ],
      technologies: [
        "NextJS", "Node.js", "Express", "MongoDB", "TailwindCSS", 
        "ReactNative", "OpenAI", "Whisper", "Kotlin", "Spring Boot", 
        "PostgreSQL", "Redis", "Stripe", "Razorpay", "GraphQL", "ElasticSearch"
      ],
      website: "" // No external link
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
                          {exp.website && (
                            <a 
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                              }`}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
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

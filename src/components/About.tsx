import profileImg from '../assets/profile.png';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-16 relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-1"></div>
        <div className="manga-frame frame-3"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-1"></div>
        <div className={`impact-lines ${theme === 'dark' ? 'text-white' : 'text-black'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-down">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className={`w-96 h-96 mx-auto rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center transition-all duration-300 hover:scale-105`}>
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover object-[50%_70%]" />
              </div>
            </div>
            
            <div className="animate-slide-right">
              <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate Full Stack Developer with 5+ years of experience in building scalable web applications. 
                I specialize in React.js, Node.js, and modern web technologies, with expertise in both frontend and 
                backend development, creating seamless and visually appealing user experiences.
              </p>
              
              <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I have hands-on experience with cloud platforms like AWS, database management, and modern development 
                practices. I'm always eager to learn new technologies and solve challenging problems with creative solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['Full Stack Development', 'Creative Problem Solving', 'Cloud Computing', 'Team Collaboration'].map((trait, index) => (
                  <span 
                    key={trait}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-bounce-in ${
                      theme === 'dark' 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
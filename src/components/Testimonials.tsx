import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Aditya is an exceptional full-stack developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into scalable solutions is remarkable. He's also a great team player and mentor."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Developer",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Working with Aditya was a pleasure. His expertise in React and Node.js helped us build a robust application that scaled beautifully. He has a keen eye for performance optimization and clean code architecture."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Tech Lead",
      company: "Digital Agency Pro",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Aditya's problem-solving skills are outstanding. He quickly adapted to our tech stack and contributed significantly to our projects. His attention to detail and commitment to best practices made him an invaluable team member."
    },
    {
      id: 4,
      name: "David Kumar",
      role: "CTO",
      company: "InnovateTech",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Aditya delivered our project ahead of schedule with exceptional quality. His full-stack expertise and understanding of modern development practices helped us build a product that exceeded our expectations."
    }
  ];

  return (
    <section id="testimonials" className={`py-20 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-2"></div>
        <div className="manga-frame frame-3"></div>
        <div className="action-bubble bubble-3"></div>
        <div className="jagged-panel jagged-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              What People Say
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Feedback from colleagues, managers, and clients I've had the pleasure to work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-bounce-in ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-800 hover:border-white hover:shadow-2xl' 
                    : 'bg-gray-50 border border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-16px) rotateY(3deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                }}
              >
                {/* Quote icon */}
                <div className={`absolute top-6 right-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${
                  theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-current animate-bounce-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className={`text-lg leading-relaxed mb-6 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    />
                    <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                      theme === 'dark' ? 'border-white' : 'border-black'
                    }`} style={{ opacity: 0 }} 
                    onMouseEnter={(e) => e.target.style.opacity = '0.3'}
                    onMouseLeave={(e) => e.target.style.opacity = '0'}
                    ></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
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

export default Testimonials;
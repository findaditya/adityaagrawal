import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'findadityaagrawal@gmail.com',
      href: 'mailto:findadityaagrawal@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 83838 92158',
      href: 'tel:+918383892158'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/findaditya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-agrawal1/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/that_aditya', label: 'Twitter' }
  ];

  return (
    <section id="contact" className={`py-20 relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-1"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-1"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="jagged-panel jagged-2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-down">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
              <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-bounce-in ${
                      theme === 'dark' 
                        ? 'bg-gray-900 hover:bg-gray-800' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce-in ${
                      theme === 'dark' 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:scale-105 focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-white focus:ring-white' 
                        : 'bg-white border-gray-300 text-black focus:border-black focus:ring-black'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:scale-105 focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-white focus:ring-white' 
                        : 'bg-white border-gray-300 text-black focus:border-black focus:ring-black'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:scale-105 focus:outline-none focus:ring-2 resize-none ${
                      theme === 'dark' 
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-white focus:ring-white' 
                        : 'bg-white border-gray-300 text-black focus:border-black focus:ring-black'
                    }`}
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:rotate-1 ${
                    theme === 'dark' 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
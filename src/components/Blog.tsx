import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Blog = () => {
  const { theme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable REST APIs with Node.js and Express",
      excerpt: "Learn how to create robust and scalable REST APIs using Node.js and Express.js with best practices for authentication, error handling, and database integration.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Node.js", "Express.js", "REST API", "Backend"]
    },
    {
      id: 2,
      title: "React Performance Optimization: Tips and Tricks",
      excerpt: "Discover advanced techniques to optimize your React applications for better performance, including memoization, lazy loading, and bundle splitting.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Frontend Development",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Performance", "Optimization", "Frontend"]
    },
    {
      id: 3,
      title: "Deploying Full-Stack Applications on AWS",
      excerpt: "A comprehensive guide to deploying full-stack applications on AWS using EC2, RDS, and S3 with CI/CD pipelines for automated deployments.",
      date: "2023-12-22",
      readTime: "15 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AWS", "DevOps", "Deployment", "CI/CD"]
    },
    {
      id: 4,
      title: "Database Design Patterns for Modern Web Applications",
      excerpt: "Explore essential database design patterns and best practices for MySQL and MongoDB in modern web applications with real-world examples.",
      date: "2023-12-10",
      readTime: "10 min read",
      category: "Database",
      image: "https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["MySQL", "MongoDB", "Database Design", "Backend"]
    },
    {
      id: 5,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Learn how to leverage TypeScript effectively in large-scale applications with advanced types, generics, and architectural patterns.",
      date: "2023-11-28",
      readTime: "14 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["TypeScript", "JavaScript", "Architecture", "Best Practices"]
    },
    {
      id: 6,
      title: "Containerizing Applications with Docker: A Practical Guide",
      excerpt: "Step-by-step guide to containerizing your applications with Docker, including multi-stage builds, optimization techniques, and deployment strategies.",
      date: "2023-11-15",
      readTime: "11 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/11035467/pexels-photo-11035467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Docker", "Containerization", "DevOps", "Deployment"]
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className={`py-20 relative transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Manga Background Elements */}
      <div className={`onepiece-background ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="manga-frame frame-3"></div>
        <div className="manga-frame frame-5"></div>
        <div className="action-bubble bubble-1"></div>
        <div className="action-bubble bubble-2"></div>
        <div className="jagged-panel jagged-2"></div>
        <div className={`impact-lines ${theme === 'dark' ? 'text-white' : 'text-black'}`}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Latest Blog Posts
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 animate-slide-right ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Sharing insights, tutorials, and experiences from my journey as a Full Stack Developer.
              Explore articles on modern web development, best practices, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-bounce-in ${
                  theme === 'dark' 
                    ? 'bg-black border border-gray-800 hover:border-white hover:shadow-2xl' 
                    : 'bg-white border border-gray-200 hover:border-black shadow-lg hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-16px) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white'
                  }`}>
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`flex items-center gap-4 mb-4 text-sm transition-colors duration-500 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 group-hover:animate-pulse transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed transition-colors duration-500 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-full transition-all duration-300 hover:scale-110 ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 group ${
                    theme === 'dark' 
                      ? 'text-white hover:text-gray-300' 
                      : 'text-black hover:text-gray-700'
                  }`}>
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
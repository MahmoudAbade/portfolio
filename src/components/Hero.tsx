
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-gray-800 relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Alex Rodriguez
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Junior Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Specializing in AI & Computer Vision
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
            Computer Science graduate with a passion for creating intelligent systems that can see and understand the world. 
            I combine cutting-edge AI technologies with full-stack development to build impactful solutions that bridge the gap 
            between human intuition and machine intelligence.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:alex.rodriguez@email.com" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/alexrodriguez" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/alexrodriguez" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('skills')}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-indigo-600 hover:text-indigo-700 border border-gray-200 hover:border-indigo-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

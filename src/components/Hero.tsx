
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="text-center z-10 px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Alex Rodriguez
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Junior Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Specializing in AI & Computer Vision
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science graduate with a passion for creating intelligent systems that can see and understand the world. 
            I combine cutting-edge AI technologies with full-stack development to build impactful solutions that bridge the gap 
            between human intuition and machine intelligence.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:alex.rodriguez@email.com" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/alexrodriguez" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/alexrodriguez" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('skills')}
          className="animate-bounce text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

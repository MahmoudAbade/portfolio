
import React from 'react';
import { ExternalLink, Github, Eye, Zap, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Traffic Monitoring System",
      description: "An AI-powered computer vision system that analyzes traffic patterns and vehicle counting in real-time using YOLO object detection and OpenCV. The system provides actionable insights for traffic management and urban planning.",
      role: "Lead Developer & ML Engineer",
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "React", "MongoDB"],
      problem: "Manual traffic monitoring is inefficient and prone to errors, leading to poor traffic management decisions.",
      impact: "Achieved 94% accuracy in vehicle detection and reduced manual monitoring effort by 80%.",
      icon: <Eye size={24} />,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Facial Emotion Recognition Web App",
      description: "A real-time emotion detection application that uses deep learning to identify human emotions from facial expressions. Built with a React frontend and Python backend, featuring live camera feed processing.",
      role: "Full Stack Developer",
      technologies: ["TensorFlow", "Python", "React", "WebRTC", "Node.js", "Express"],
      problem: "Understanding emotional responses in real-time for better human-computer interaction and user experience analysis.",
      impact: "Processed over 1,000 images per minute with 89% emotion classification accuracy.",
      icon: <Zap size={24} />,
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Collaborative Code Review Platform",
      description: "A full-stack web application that facilitates team code reviews with AI-assisted suggestions. Features include syntax highlighting, automated testing integration, and real-time collaboration tools.",
      role: "Full Stack Developer & Team Lead",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker", "AWS"],
      problem: "Existing code review tools lack intelligent suggestions and seamless collaboration features.",
      impact: "Improved team code review efficiency by 60% and reduced bug detection time by 40%.",
      icon: <Users size={24} />,
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work combining AI, computer vision, and full-stack development to solve real-world problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-600">{project.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <span className="font-semibold text-gray-700">Role: </span>
                    <span className="text-gray-600">{project.role}</span>
                  </div>

                  <div className="mb-4">
                    <span className="font-semibold text-gray-700">Problem Solved: </span>
                    <span className="text-gray-600">{project.problem}</span>
                  </div>

                  <div className="mb-6">
                    <span className="font-semibold text-gray-700">Impact: </span>
                    <span className="text-green-600 font-medium">{project.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.githubUrl} className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a href={project.liveUrl} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Code, Brain, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      icon: <Brain size={32} />,
      title: "AI & ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Computer Vision", "Scikit-learn", "Keras", "YOLO"]
    },
    {
      icon: <Server size={32} />,
      title: "Web Technologies",
      skills: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"]
    }
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication", 
    "Adaptability", "Critical Thinking", "Project Management"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Development Intern",
      company: "TechVision Solutions",
      location: "San Francisco, CA",
      duration: "June 2023 - August 2023",
      responsibilities: [
        "Developed computer vision models for automated quality control in manufacturing",
        "Implemented image preprocessing pipelines using OpenCV and Python",
        "Collaborated with senior developers to optimize model performance by 25%",
        "Created detailed documentation and training materials for the development team"
      ]
    },
    {
      title: "Full Stack Development Intern",
      company: "DataFlow Analytics",
      location: "Remote",
      duration: "January 2023 - May 2023",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Designed and implemented RESTful APIs for data visualization dashboards",
        "Integrated machine learning models into web applications using Flask",
        "Participated in agile development processes and code review sessions"
      ]
    },
    {
      title: "Research Assistant",
      company: "University Computer Vision Lab",
      location: "University Campus",
      duration: "September 2022 - December 2022",
      responsibilities: [
        "Conducted research on deep learning applications in medical image analysis",
        "Implemented and tested various CNN architectures for image classification",
        "Co-authored a research paper on automated medical diagnosis systems",
        "Presented findings at the annual Computer Science undergraduate symposium"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hands-on experience in AI development, full-stack programming, and research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-16 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

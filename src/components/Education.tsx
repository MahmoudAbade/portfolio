
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const courses = [
    "Machine Learning & Deep Learning",
    "Computer Vision & Image Processing",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Artificial Intelligence",
    "Web Development",
    "Statistics & Probability"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in computer science with specialized focus on AI and machine learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-start gap-6">
              <div className="text-blue-600">
                <GraduationCap size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">Stanford University</p>
                <p className="text-gray-600 mb-4">Graduated: May 2023 | GPA: 3.8/4.0</p>
                <p className="text-gray-700 leading-relaxed">
                  Concentrated in Artificial Intelligence and Machine Learning with additional coursework in 
                  computer vision and data science. Completed senior capstone project on real-time object 
                  detection for autonomous vehicles.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Achievements</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Dean's List for 6 consecutive semesters</li>
                <li>• Outstanding Student in Computer Vision Course</li>
                <li>• Winner - University AI Challenge 2022</li>
                <li>• President, Computer Science Student Association</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {courses.map((course, index) => (
                  <span key={index} className="text-gray-700 text-sm bg-gray-50 px-3 py-1 rounded">
                    {course}
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

export default Education;

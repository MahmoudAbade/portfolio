
import React from 'react';
import { BookOpen, Code, Brain } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: <Brain size={32} />,
      title: "Machine Learning & Deep Learning",
      description: "Comprehensive study of ML algorithms, neural networks, and deep learning architectures. Covered supervised/unsupervised learning, backpropagation, CNNs, RNNs, and practical implementation using TensorFlow and PyTorch.",
      category: "AI/ML"
    },
    {
      icon: <Brain size={32} />,
      title: "Computer Vision & Image Processing",
      description: "Advanced techniques in image analysis, feature detection, object recognition, and scene understanding. Hands-on experience with OpenCV, image filters, edge detection, and modern vision algorithms.",
      category: "AI/ML"
    },
    {
      icon: <Code size={32} />,
      title: "Data Structures & Algorithms",
      description: "Fundamental computer science concepts including arrays, linked lists, trees, graphs, sorting algorithms, and complexity analysis. Essential foundation for efficient software development.",
      category: "Programming"
    },
    {
      icon: <Code size={32} />,
      title: "Database Management Systems",
      description: "Relational database design, SQL programming, normalization, indexing, and transaction management. Practical experience with PostgreSQL, MongoDB, and database optimization techniques.",
      category: "Backend"
    },
    {
      icon: <Code size={32} />,
      title: "Software Engineering",
      description: "Software development lifecycle, design patterns, version control with Git, testing methodologies, and collaborative development practices. Focus on building maintainable, scalable applications.",
      category: "Development"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Web Development",
      description: "Full-stack web development covering HTML, CSS, JavaScript, React, Node.js, and RESTful APIs. Built responsive web applications with modern frameworks and deployment strategies.",
      category: "Frontend"
    }
  ];

  const categoryColors = {
    "AI/ML": "from-purple-500 to-pink-500",
    "Programming": "from-blue-500 to-cyan-500",
    "Backend": "from-green-500 to-teal-500",
    "Development": "from-orange-500 to-red-500",
    "Frontend": "from-indigo-500 to-purple-500"
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Relevant Coursework</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic foundation in computer science with specialized focus on AI, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600">{course.icon}</div>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[course.category]}`}>
                    {course.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

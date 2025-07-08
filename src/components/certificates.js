import React from "react";

// Certificates Component
const Certificates = () => {
  const certificates = [
    { title: "Introduction to Cloud Computing", provider: "Coursera – IBM" },
    {
      title: "Python for Data Science, AI and Development",
      provider: "Coursera – IBM",
    },
    { title: "Introduction to DevOps", provider: "Coursera – IBM" },
    { title: "Agile Development and Scrum", provider: "Coursera – IBM" },
    {
      title: "Fundamentals of Unity Android Game Development",
      provider: "Coursera – IBM",
    },
    {
      title: "Effective Problem Solving and Decision-Making",
      provider: "Coursera – IBM",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

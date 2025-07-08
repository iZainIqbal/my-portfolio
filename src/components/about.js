import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
// About Component
const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = {
    Skills: [
      {
        name: "Flutter",
        desc: "Mobile app development using Firebase, REST APIs, and clean architecture",
      },
      {
        name: "React & Node.js",
        desc: "Full-stack web development with JWT Auth, MongoDB, and Tailwind",
      },
      {
        name: "Unity (C#)",
        desc: "Game development for mobile with powerups, UI systems, and scoring mechanics",
      },
      {
        name: "Firebase & MongoDB",
        desc: "Realtime database integration and backend logic",
      },
    ],
    Experience: [
      {
        name: "Junior Developer – Digitalize Blood Bank",
        desc: "Built real-time blood donor app during a 6-month internship",
      },
      {
        name: "Freelance Projects",
        desc: "Developed and deployed various apps including AI Chatbot, QR Scanner, eCommerce",
      },
    ],
    Education: [
      {
        name: "Bachelor of Science – Computer Science",
        desc: "University of Gujrat (2021 – 2025), CGPA: 3.37/4.00",
      },
      {
        name: "Intermediate",
        desc: "Completed with focus on Pre-Engineering (2019)",
      },
      { name: "Matriculation", desc: "Secured 978/1100 in science group" },
    ],
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative w-full h-96 bg-gray-800 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 w-64 h-64 bg-gray-700 rounded-full border-4 border-white/10 hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <img
                    src="images/min.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm a Computer Science graduate from University of Gujrat with
              hands-on experience in mobile app development (Flutter), web
              development (React + Node.js), and Unity game design. I've built
              award-winning projects like <em>Chrono Chase</em>, launched apps
              on the Play Store, and served as a Junior Developer at Digitalize
              Blood Bank.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-6 border-b border-gray-700">
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-1 font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {tabs[activeTab].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-blue-400 font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

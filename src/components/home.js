import React, { useState, useEffect, useRef } from "react";

// Home Component
const Home = () => {
  const texts = [
    "Flutter Developer",
    "Unity Game Developer",
    "Full-Stack Engineer",
    "AI Enthusiast",
    "Cloud Practitioner",
    "Software Developer",
  ];

  const [text, setText] = useState(texts[0]);
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % texts.length;
        setText(texts[indexRef.current]);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl text-gray-300 animate-fade-in">
              Hello, I'm
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in-up">
              Zain Iqbal
            </h1>
            <div className="flex items-center space-x-3">
              <h3 className="text-xl text-gray-300">A</h3>
              <span
                className={`text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-500 ${
                  isTyping ? "opacity-100" : "opacity-50"
                }`}
              >
                {text}
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I'm a Computer Science graduate passionate about building impactful
            software — from mobile apps and web platforms to Unity games. I've
            worked on real-world products, led projects as a startup CTO, and
            contributed to award-winning ideas.
          </p>

          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 w-64 h-64 bg-gray-700 rounded-full border-4 border-white/10 hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <img
                  src="images/heroPic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

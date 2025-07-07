import React, { useState, useEffect, useRef } from "react";

const texts = [
  "Flutter Developer",
  "Unity Game Developer",
  "Full-Stack Engineer",
  "AI Enthusiast",
  "Cloud Practitioner",
  "Software Developer",
];

const Home = () => {
  const [text, setText] = useState(texts[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % texts.length;
      setText(texts[indexRef.current]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home">
      <div className="hero-container">
        <div className="info-side">
          <h3>Hello, I'm</h3>
          <h1>Zain Iqbal</h1>
          <h3>
            A <span id="change-text">{text}</span>
          </h3>
          <p>
            I’m a Computer Science graduate passionate about building impactful
            software — from mobile apps and web platforms to Unity games. I've
            worked on real-world products, led projects as a startup CTO, and
            contributed to award-winning ideas. Whether it's Flutter, Unity, or
            React, I bring creativity, problem-solving, and clean code to
            everything I build.
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
        <div className="hero-img">
          <img src="images/min.jpeg" alt="Zain Iqbal" />
        </div>
      </div>
    </section>
  );
};

export default Home;

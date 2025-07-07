import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/hero.jpg" alt="Zain Iqbal" />
          </div>
          <div className="about-col-2">
            <h1 className="subtitle">About Me</h1>
            <p>
              I'm a Computer Science graduate from University of Gujrat with
              hands-on experience in mobile app development (Flutter), web
              development (React + Node.js), and Unity game design. I've built
              award-winning projects like *Chrono Chase*, launched apps on the
              Play Store, and served as a Junior Developer at Digitalize Blood
              Bank. With a strong foundation in clean code and real-world
              projects, I love solving problems through technology.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "Skills" ? "active-link" : ""
                }`}
                onClick={() => handleTabClick("Skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Experience" ? "active-link" : ""
                }`}
                onClick={() => handleTabClick("Experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "Education" ? "active-link" : ""
                }`}
                onClick={() => handleTabClick("Education")}
              >
                Education
              </p>
            </div>

            {activeTab === "Skills" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>Flutter</span>
                    <br />
                    Mobile app development using Firebase, REST APIs, and clean
                    architecture
                  </li>
                  <li>
                    <span>React & Node.js</span>
                    <br />
                    Full-stack web development with JWT Auth, MongoDB, and
                    Tailwind
                  </li>
                  <li>
                    <span>Unity (C#)</span>
                    <br />
                    Game development for mobile with powerups, UI systems, and
                    scoring mechanics
                  </li>
                  <li>
                    <span>Firebase & MongoDB</span>
                    <br />
                    Realtime database integration and backend logic
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>Junior Developer – Digitalize Blood Bank</span>
                    <br />
                    Built real-time blood donor app during a 6-month internship
                  </li>
                  <li>
                    <span>Freelance Projects</span>
                    <br />
                    Developed and deployed various apps including AI Chatbot, QR
                    Scanner, eCommerce
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "Education" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li>
                    <span>Bachelor of Science – Computer Science</span>
                    <br />
                    University of Gujrat (2021 – 2025), CGPA: 3.37/4.00
                  </li>
                  <li>
                    <span>Intermediate</span>
                    <br />
                    Completed with focus on Pre-Engineering (2019)
                  </li>
                  <li>
                    <span>Matriculation</span>
                    <br />
                    Secured 978/1100 in science group
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

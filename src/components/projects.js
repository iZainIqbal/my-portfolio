import React from "react";

const projects = [
  {
    title: "AI Chatbot (Dialogflow)",
    image: "images/chat_screen.png",
    description:
      "An intelligent chatbot integrated into a Flutter app using Dialogflow to support natural conversations.",
    link: "https://github.com/iZainIqbal/chatbot",
  },
  {
    title: "QR Scanner App",
    image: "images/qr_scanner.png",
    description:
      "A real-time QR code scanner and generator built in Flutter. Published on Play Store with 100+ downloads.",
    link: "https://www.linkedin.com/posts/netsflow_appdevelopment-flutterdev-netsflow-activity-7243544883993464832-XlSh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkb_oIB21BTT83YL4uD5dZAm4CO96-9wow", // replace if available
  },
  {
    title: "Chrono Chase (Unity Game)",
    image: "images/chrono_chase.png",
    description:
      "An endless runner Unity game based on time-travel themes. Features include a shop system, user profiles, and powerups.",
    link: "https://www.linkedin.com/posts/ali-shan-4469a521a_unity-gamedev-3d-activity-7321482456098848771-M-jd",
  },
  {
    title: "Flutter eCommerce App",
    image: "images/ecom_app.png",
    description:
      "A Flutter-based eCommerce app with cart, JWT auth, and Nodejs and MongoDb. Admin panel in Flutter Web + Node.js  [In Progress]",
    link: "#",
  },
  {
    title: "Digitalize Blood Bank",
    image: "images/digitalizeblood.png",
    description:
      "Built during internship at BIC: real-time donor-recipient matching app with Firebase auth and messaging.",
    link: "#https://www.youtube.com/shorts/XoDwdQPJYMU", // Add GitHub/demo link
  },
  {
    title: "Notes App",
    image: "images/notes_app1.png",
    description:
      "Lightweight notes app with SQLite-based offline data. Features include create, edit, and delete notes.",
    link: "https://github.com/iZainIqbal/mynotesapp", // Add GitHub link if available
  },
  {
    title: "Zig-Zag Unity Game",
    image: "images/zig_zag.png",
    description:
      "A lightweight zigzag endless runner developed in Unity with score tracking and mobile-optimized mechanics.",
    link: "#", // Add GitHub or demo link
  },
  {
    title: "Flappy Bird Clone",
    image: "images/flappy_bird.png",
    description:
      "A fully functional Flappy Bird clone made in Unity using object pooling and parallax background effects.",
    link: "#", // Add GitHub or demo link
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="subtitle">My Work</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn">
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default Projects;

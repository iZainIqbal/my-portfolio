import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      provider: "Coursera – IBM",
    },
    {
      title: "Python for Data Science, AI and Development",
      provider: "Coursera – IBM",
    },
    {
      title: "Introduction to DevOps",
      provider: "Coursera – IBM",
    },
    {
      title: "Agile Development and Scrum",
      provider: "Coursera – IBM",
    },
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
    <section id="certificates">
      <div className="container">
        <h2 className="subtitle">Certifications</h2>
        <div className="certificates-list">
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>
                <strong>{cert.title}</strong> <br />
                <span>{cert.provider}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

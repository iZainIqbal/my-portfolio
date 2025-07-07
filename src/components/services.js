import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="uil uil-web-grid"></i>
            <h2>Full-Stack Web Development</h2>
            <p>
              I build modern, scalable web applications using React for the
              frontend and Node.js for backend APIs. From responsive UIs to
              database integration and secure authentication — I deliver
              full-stack solutions ready for production.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="uil uil-mobile-android"></i>
            <h2>Mobile App Development</h2>
            <p>
              I specialize in crafting cross-platform apps using Flutter.
              Whether it’s a live blood donor app or an eCommerce store, I
              ensure clean architecture, real-time features, and polished user
              experience across Android and iOS.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div>
            <i className="uil uil-game-structure"></i>
            <h2>Game Development</h2>
            <p>
              I develop lightweight and engaging mobile games using Unity. From
              endless runners like *Chrono Chase* to clones of classics like
              *Flappy Bird*, I focus on performance, smooth mechanics, and
              immersive gameplay.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

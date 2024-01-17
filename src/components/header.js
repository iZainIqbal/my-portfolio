import React from 'react';

const Header = () => {
  
  return (
    <header >
        <a href="#" class="logo">iZain.</a>
        <nav class="navbar">
            <a href="#home" style={{"--i":1}}>Home</a>
            <a href="#about" style={{"--i":2}}>About</a>
            <a href="#services" style={{"--i":3}}>Services</a>
            <a href="#projects" style={{"--i":4}}>Projects</a>
            <a href="#contact" style={{"--i":5}}>Contact</a>
          </nav>
    </header>
  );
};

export default Header;

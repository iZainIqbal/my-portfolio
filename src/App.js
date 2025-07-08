import React from "react";
import "../src/App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Zain Iqbal";
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

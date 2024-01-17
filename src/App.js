import React from 'react';
import '../src/App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import Footer from './components/footer';
import Work from './components/work';

function App() {
  return (
    <>
    <Header />
    <Home />
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

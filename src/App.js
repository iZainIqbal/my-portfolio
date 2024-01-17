import  React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Skills');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const [text, setText] = useState('Mobile App Developer');
    const texts = ['Flutter Developer', 'Web Developer', 'Data Scientist', 'AI Specialist'];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = index + 1 === texts.length ? 0 : index + 1;
            setText(texts[index]);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);
    return (
      <>
    <header>
        
        <a href="#" class="logo">iZain.</a>
        
        <nav class="navbar">
            <a href="#home" style={{"--i":1}}>Home</a>
            <a href="#about" style={{"--i":2}}>About</a>
            <a href="#services" style={{"--i":3}}>Services</a>
            <a href="#projects" style={{"--i":4}}>Projects</a>
            <a href="#contact" style={{"--i":5}}>Contact</a>
        </nav>
    </header>
    <section id="home">
        <div class="hero-container">
            <div class="info-side">
                <h3>Hello, It's me</h3>
                <h1>Zain Iqbal</h1>
                <h3>I am a <span id="change-text">{text}</span></h3>
                <p>Flutter Expert | CS Undergrad 25 | Talks about Machine Learning | Artificial Intelligence Enthusiast !</p>
            </div>
            <div class="hero-img">
                <img src="images/heroPic.png" alt="Hero-Img"/>
            </div>
        </div>
    </section>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="images/hero.jpg" alt=""/>
                </div>
                <div class="about-col-2">
                    <h1 class="subtitle">About me</h1>
                    <p>I'm a CS student proficient in Flutter and learning React, merging technical expertise with creativity to craft engaging user experiences.</p>
                    <div class="tab-titles">
                        <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('Skills')}>Skills</p>
                        <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('Experience')}>Experience</p>
                        <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => handleTabClick('Education')}>Education</p>
                    </div>
                    {activeTab === 'Skills' && (
                        <div className="tab-contents active-tab">
                            <ul>
                              <li><span>Flutter Developer</span><br/>Creating Real world Apps </li>
                              <li><span>Web Development</span><br/>Designing Websites for Best user Experiences</li>
                              <li><span>App Development</span><br/>Building Andriod/iOS Apps</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Experience' && (
                        <div className="tab-contents active-tab">
                            <ul>
                              <li><span>Junior Developer</span><br/>Currently employed as a Junior Developer at Digitalize Blood Bank</li>
                              <li><span>2 Years</span><br/>Experienced in Flutter development for 2 years</li>
                              <li><span>Programmer</span><br/>Proficient in various programming languages</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Education' && (
                        <div className="tab-contents active-tab">
                            <ul>
                              <li><span>Bachelor</span><br/>CS 25 undergrad @ UOG </li>
                              <li><span>Intermediate</span><br/>Completed my Intermediate in 2019</li>
                              <li><span>Matric</span><br/>Completed Matric with 978/1100</li>
                            </ul>
                        </div>
                    )}
                  </div>
            </div>
        </div>
    </section>
    <section id="services">
        
        <div class="container">
            <h1 class="sub-title">My Services</h1>
            <div class="services-list">
                <div>
                    <i class="uil uil-android "></i>
                    <h2>Flutter</h2>
                    <p>Expert in crafting cross-platform mobile applications with a rich, native-like experience using Flutter framework.Specialized in creating visually appealing and responsive user interfaces for Flutter apps, ensuring a seamless user experience.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="uil uil-mobile-android " ></i>
                    <h2>Programming</h2>
                    <p>Offering beginner-friendly programming services to individuals starting their coding journey.Providing guidance and support for beginners to grasp fundamental programming concepts and build a solid foundation for their coding skills.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="uil uil-react " ></i>
                    <h2>React</h2>
                    <p>Providing cutting-edge web development services using React, creating dynamic and interactive user interfaces.Specializing in building fast and responsive SPAs with React, optimizing web applications for speed and user engagement.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        
    </div>
    </section>
    <section id="projects">
        <div class="container">
            <div class="subtitle">My Work</div>
            <div class="work-list">
                <div class="work">
                    <img src="images/meals_app.jpg" alt=""/>
                    <div class="layer">
                        <h3>Meals App</h3>
                        <p>Crafted a meals app in Flutter, seamlessly blending visuals with intuitive user interfaces.</p>
                        <a href="#" ><i class="uil uil-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="images/work-1.png" alt=""/>
                    <div class="layer">
                        <h3>Websites</h3>
                        <p>Created my portfolio website. It's a straightforward showcase of my skills & projects,designed to look good on any device.</p>
                        <a href="#" ><i class="uil uil-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="images/digitalizeblood.png" alt=""/>
                    <div class="layer">
                        <h3>Internship</h3>
                        <p>Currently enrolled in an internship at BIC. </p>
                        <a href="#" ><i class="uil uil-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" class="btn">See more</a>
        </div>
    </section>
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="uil uil-fast-mail"></i> appdev.zain@gmail.com</p>
                    <p><i class="uil uil-phone-alt"></i> +923066244324</p>
                    <div class="social-icons">
                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                        <a href="#"><i class="uil uil-instagram"></i></a>
                        <a href="https:/www.github.com/iZainiqbal"><i class="uil uil-github-alt"></i></a>
                        <a href="https://www.linkedin.com/in/zain-iqbal-996a64228/"><i class="uil uil-linkedin-alt"></i></a>
                        <br/>
                    </div>
                    <a href="#" class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>Created by <a href="#">iZainIqbal</a> with <i class="uil uil-heart-alt"></i></p>
    </footer>
    
    </>
  );
  
}


export default App;
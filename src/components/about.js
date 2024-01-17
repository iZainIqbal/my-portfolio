import React,{useState} from 'react'

const About = () => {

    const [activeTab, setActiveTab] = useState('Skills');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
   
  return (
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
  )
}
export default About;

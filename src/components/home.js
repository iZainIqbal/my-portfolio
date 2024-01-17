import React,{useState,useEffect} from 'react';

const Home = () => { 
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
    return(
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
    );
}
export default Home;
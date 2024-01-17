import React,{useState} from "react";

const Services = () => {
    return (
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
    );
}
export default Services;
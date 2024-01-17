import React from 'react';

const Work = () => {
    return(
        <>
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
        </>
    );
}
export default Work;

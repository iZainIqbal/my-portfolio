import React from 'react';

const Contact = () =>{
    return (
        <>
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
                    <form >
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}
export default Contact;
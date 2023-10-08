import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_g2tph3q', 'template_1p5mbfi', form.current, 'sxGNCjdwnIt1iNlO0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDes'>Please fill out the form below to discuss any work opportunities.</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="contactInput" placeholder="Your Name" name="user_name" />
                <input type="email" className="contactInput" placeholder="Your Email" name="user_email" />
                <textarea className="contactInput contactMessage" placeholder="Your Message" name="message"></textarea>
                <button type="submit" className="contactSubmit">Submit</button>
            </form>

            <div className="contactIcons">
                <a href="https://www.linkedin.com/in/your-linkedin-id/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </section>
    );
}

export default Contact;

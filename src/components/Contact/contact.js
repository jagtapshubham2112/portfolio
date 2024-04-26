import React, { useRef } from 'react';
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import LinkdinIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import PhoneCall from '../../assets/phone-call.png';
import Gmail from '../../assets/gmail.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Get form fields
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
  
    // Check if any of the fields are empty
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Send email
    emailjs
      .sendForm('service_zgeibct', 'template_m5t6u5k', form.current, {
        publicKey: 'J6l4Efo1NvThjPL99',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };
  
    return (
        <section className="contactPage">
            {/* <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include:
                </p>
                <div className="clientImages">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='user_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='user_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' ></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                    <div className='linkWrapper'><a href='https://www.linkedin.com/in/jagtapshubham2112'><img src={LinkdinIcon} alt="LinkedIn" className="link1" /></a></div>
                    <div className='linkWrapper'><a href='https://twitter.com/jshubham2112'><img src={TwitterIcon} alt="Twitter" className="link2" /> </a></div>
                    <div className='linkWrapper'><a href='https://www.instagram.com/shubhamjagtap212'><img src={InstagramIcon} alt="Instagram" className="link3" /></a></div>
                    <div className='linkWrapper'><a href='tel:+919730009088'><img src={PhoneCall} alt="Phone_Call" className="link4" /></a></div>
                    <div className='linkWrapper'><a href='mailto:jagtapshubham2112@gmail.com'><img src={Gmail} alt="Gmail" className="link5" /></a></div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

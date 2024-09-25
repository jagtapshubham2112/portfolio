import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import resumeBtnImg from '../../assets/resume.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Shubham</span> <br /> Data Analyst </span>
        <p className='introPara'>
          As an aspiring data analyst, I thrive on uncovering stories <br />
          hidden within data. My portfolio showcases projects where <br />
          data transforms into actionable insights. Dive in to explore <br /> 
          how numbers shape impactful narratives.
        </p>
        
        <div className="buttonWrapper">
          <a href="https://drive.usercontent.google.com/uc?id=1oDM2CCqXwmYzPvQmFojDLlD6i2QsON_u&export=download" target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <img src={resumeBtnImg} alt="Resume" className='btnImg' />
              Resume
            </button>
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

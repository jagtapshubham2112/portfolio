import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import rs from '../../assets/resume/Resume.pdf';
import resumeBtnImg from '../../assets/resume.png';
// import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Shubham</span> <br /> Data Analyst </span>
        <p className='introPara'>I'm a budding data analyst with a passion for turning data into <br /> insights. Explore my portfolio to see my projects and learn about <br /> my analytical journey. </p>
        <a href={rs} download={encodeURIComponent("Shubham's_Resume.pdf")}>
          <button className="btn">
            <img src={resumeBtnImg} alt="Hire" className='btnImg' />
            Resume
          </button>
        </a>

      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

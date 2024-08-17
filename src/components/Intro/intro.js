import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import rs from '../../assets/shubham_Resume/Resume.pdf';
import resumeBtnImg from '../../assets/resume.png';

const Intro = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = rs;
    link.download = encodeURIComponent("Shubham's_Resume.pdf");
    link.click();
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Shubham</span> <br /> Data Analyst </span>
        <p className='introPara'>I'm a budding data analyst with a passion for turning data into <br /> insights. Explore my portfolio to see my projects and learn about <br /> my analytical journey. </p>
        
        <div className="buttonWrapper">
          <button className="btn" onClick={handleResumeDownload}>
            <img src={resumeBtnImg} alt="Hire" className='btnImg' />
            Resume
          </button>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

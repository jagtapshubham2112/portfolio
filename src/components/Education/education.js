import React from 'react';
import './education.css';
import SPPU from '../../assets/SPPU.png';
import PHASU from '../../assets/PHASU.png';
// import MSB from '../../assets/MSB.png';



const education = () => {
    return (
        <section id='education'>
            <span className="educationTitle"> Education </span>
            <span className="educationDesc"> I hold a Master's in Computer Application and a Bachelor's in Computer Science, providing a strong foundation in software development and IT. Equipped with comprehensive knowledge, I am poised to excel in the dynamic realm of technology. </span>
            <div className="educationBars">
                <div className="educationBar">
                    <img src={SPPU} alt="" className="educationBarImg" />
                    <div className="educationBarText">
                        <h2>Master's in Computer Application</h2>
                        <p>Savitribai Phule Pune University</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={PHASU} alt="" className="educationBarImg" />
                    <div className="educationBarText">
                        <h2>Bachelor's in Computer Science</h2>
                        <p>Punyashlok Ahilyadevi Holkar University Solapur</p>
                    </div>
                </div>
                {/* <div className="educationBar">
                    <img src={MSB} alt="" className="educationBarImg1" />
                    <div className="educationBarText">
                        <h2>Microsoft Power BI</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={MSB} alt="" className="educationBarImg1" />
                    <div className="educationBarText">
                        <h2>Excel</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default education;

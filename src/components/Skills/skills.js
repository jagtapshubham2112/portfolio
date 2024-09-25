import React from 'react';
import './skills.css';
import Python from '../../assets/python.png';
import Sql from '../../assets/sql.png';
import MicrosoftPowerBI from '../../assets/Microsoft-Power-BI.png';
import Excel from '../../assets/excel.png';
import Microsoft365 from '../../assets/ms-365.png';
import Chatgpt from '../../assets/chatgpt.png';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle"> What I do </span>
            <span className="skillDesc">I turn raw data into actionable insights that empower data-driven decision-making.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Python} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>Proficient in Python with libraries like Pandas and NumPy for efficient data analysis.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Sql} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SQL</h2>
                        <p>Skilled in SQL for database management, enabling effective data retrieval and analysis.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MicrosoftPowerBI} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Power BI</h2>
                        <p>Experienced in Power BI for creating visualizations and insightful data-driven reports.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Excel} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Excel</h2>
                        <p>Proficient in Excel for data analysis, reporting, and utilizing functions and pivot tables.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Microsoft365} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Microsoft 365</h2>
                        <p>Familiar with Microsoft 365 tools for enhanc collaboration, productivity, and communication.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Chatgpt} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>ChatGPT</h2>
                        <p>Utilizing ChatGPT to enhance productivity, generate ideas, and assist with various tasks.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}




export default Skills;

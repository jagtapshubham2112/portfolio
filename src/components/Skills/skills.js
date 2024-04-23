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
            <span className="skillDesc"> I am a skilled and passionate web designer with experience. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Python} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Sql} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SQL</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MicrosoftPowerBI} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2> Power BI</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Excel} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Excel</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Microsoft365} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Microsoft 365</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Chatgpt} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Chat Gpt</h2>
                        <p>This is the text demo, you can write your own content here.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

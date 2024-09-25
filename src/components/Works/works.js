import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Github from '../../assets/github.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">Dive into my portfolio, where every detail reflects my commitment to quality and precision.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
                <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
                <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
                <img src={Portfolio4} alt="Portfolio 4" className="worksImg" /> 
            </div>
            <button className='WorkBtn' onClick={() => window.location.href = 'https://github.com/jagtapshubham2112'}>
                <img src={Github} alt="GitHub" className="GithubImg" />
                See More
            </button>
        </section>
    );
}

export default Works;

import React from 'react';
import profile from '../../../images/profile.jpg';

import './About.css';

const About = () => {
    return (
        <div id='about' className='about'>
            <div>
                <img height={300} className='about-img ' src={profile} alt="" />
            </div>
            <h5 className='about-text'>This is Ariful Islam. The founder of MotoZone warehouse. He established this warehouse in 2019 with 12 items of motorcycle of 3 different types. It is now a reknowned warehouse in Bangladesh. Now it has almost 50 motorcycles of 12 different types. </h5>
        </div>
    );
};

export default About;
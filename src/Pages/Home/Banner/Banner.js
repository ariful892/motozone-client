import React from 'react';
import banner from '../../../images/banner/motozone-banner.png';

const Banner = () => {
    return (
        <div>
            <div className="title-container">
                <h1>MotoZone</h1>
            </div>
            <div className="banner-container">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
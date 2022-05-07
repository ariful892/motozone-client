import React from 'react';
import banner from '../../../images/banner/motozone-banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="title-container">
                <h1 className='title'>MotoZone</h1>
                <p className='text-white'>We have the largest independently owned motorcycle inventory in the United States with over 1,000 motorcycles available for purchase.

                    We sell all Brands and all kinds, so regardless of what your 2 wheeled vice is, we've got it.</p>
            </div>
            <div className="banner">
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;
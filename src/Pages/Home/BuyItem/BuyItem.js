import React from 'react';
import motor from '../../../images/motor.jpg';
import './BuyItem.css';

const BuyItem = () => {
    return (
        <div id='buy' className='buy-item-container '>
            <img className='img-fluid mt-5 rounded-2' src={motor} alt="" />
            <div className='buy-item-detail'>
                <h1>We Buy Bikes</h1>
                <p>Whether you are looking for an upgrade or ready to sell, Used Motorcycle Store is your one-stop-shop for all things two-wheeled!</p>
                <button className='new-item-btn px-4 py-1 fs-3'>Contact</button>
            </div>
        </div>
    );
};

export default BuyItem;
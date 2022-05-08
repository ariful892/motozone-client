import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <About></About>
        </div>
    );
};

export default Home;
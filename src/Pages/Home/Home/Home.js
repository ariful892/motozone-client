import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BuyItem from '../BuyItem/BuyItem';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BuyItem></BuyItem>
            <About></About>

        </div>
    );
};

export default Home;
import React from 'react';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css';

const InventoryItems = () => {

    const [items] = useItems();
    const displayItem = items.slice(0, 6);

    return (
        <div id='inventory' className='ms-5 me-5'>
            <h2 className='inventory-title'><span>F E A T U R E D</span>  <span className='ms-3'> I N V E N T O R Y</span></h2>
            <div className='items-container'>
                {
                    displayItem.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>

        </div>
    );
};

export default InventoryItems;


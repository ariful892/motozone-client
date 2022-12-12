import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Loading from '../../Shared/Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css';

const InventoryItems = () => {

    // const [items] = useItems();
    // const displayItem = items.slice(0, 6);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://motozone-server-production.up.railway.app/item')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }

    const displayItem = items.slice(0, 6);

    const navigateToManageInventory = () => {
        navigate('/manage');
    }

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
            <div className='text-center'>
                <button onClick={navigateToManageInventory} className='manage-inventories px-5'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;


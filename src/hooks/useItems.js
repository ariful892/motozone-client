import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useItems = () => {

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
        <Loading></Loading>
    }

    return [items, setItems];
}

export default useItems;
import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useItems = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch('https://nameless-mesa-03450.herokuapp.com/item')
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
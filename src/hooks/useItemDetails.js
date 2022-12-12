import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useItemDetail = itemId => {

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://motozone-server-production.up.railway.app/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setIsLoading(false)
            })
    }, [itemId]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return { item, setItem };
}

export default useItemDetail;
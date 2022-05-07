import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {

    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://secret-eyrie-78207.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return [service];
}

export default useServiceDetail;
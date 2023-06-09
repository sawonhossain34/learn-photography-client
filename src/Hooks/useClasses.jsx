import { useEffect, useState } from "react";


const useClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                // setClasses(data);
                const seats = data?.sort((a, b) => b.available_seats - a.available_seats);
                setClasses(seats);
                setLoading(false);
            })
    }, [])
    return [classes, loading];
};

export default useClasses;
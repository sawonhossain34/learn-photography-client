import { useEffect, useState } from "react";


const useClasses = () => {
    const [classes,setClasses] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                // const sortClasses =data?.sort((a, b) => b.available_seats - a.available_seats);
                // console.log(sortClasses);
                setClasses(data);
                setLoading(false);
            })
    }, [])
    return [classes,loading];
};

export default useClasses;
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    
    const { data: clas = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return [clas, loading, refetch];
};

export default useClasses;
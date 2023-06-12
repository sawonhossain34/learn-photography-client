import { useQuery } from '@tanstack/react-query'
import useAuthProvider from './useAuthProvider';
// import useAxiosSecure from './UseAxiosSecure';

const useClass = () => {

    const { user, } = useAuthProvider();
    const token = localStorage.getItem('access-token');

    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const respons = await fetch(`http://localhost:5000/selected?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return respons.json();

        },
    })

    return [selected, refetch];
}


export default useClass;
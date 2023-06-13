import { useQuery } from '@tanstack/react-query'
import useAuthProvider from './useAuthProvider';
import useAxiosSecure from './UseAxiosSecure';

const useClass = () => {

    const { user,loading } = useAuthProvider();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const respons = await axiosSecure(`/selected?email=${user?.email}`)
            return respons.data;

        },
    })

    return [selected, refetch];
}


export default useClass;
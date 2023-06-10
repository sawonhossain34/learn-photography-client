import { useQuery } from '@tanstack/react-query'
import useAuthProvider from './useAuthProvider';
const useClass = () => {

    const { user } = useAuthProvider();

    const { refetch ,data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () =>{
            const respons = await fetch(`http://localhost:5000/selected?email=${user?.email}`)

            
            return respons.json();
        }
    })

    return [selected, refetch];
}


export default useClass;
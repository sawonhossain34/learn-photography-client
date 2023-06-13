import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuthProvider from "./useAuthProvider";


const UseAdmin = () => {
    const {user} = useAuthProvider();
    const [axiosSecure] = useAxiosSecure();
    const {data:isAdmin, isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return[isAdmin, isAdminLoading]
}

export default UseAdmin;
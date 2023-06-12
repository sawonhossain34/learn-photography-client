import UseAdmin from "../Hooks/UseAdmin";
import useAuthProvider from "../Hooks/useAuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// TODO: loading set useAuthProvider
const AdminRoute = ({ children }) => {
    const { user,loading} = useAuthProvider();
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();
    // TODO : secret route not set
    if (loading && isAdmin) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdminLoading) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
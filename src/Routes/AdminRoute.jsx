
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import useAuthProvider from "../Hooks/useAuthProvider";

// TODO: loading set useAuthProvider
const AdminRoute = ({ children }) => {
    const { user,loading} = useAuthProvider();
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();
    // TODO : secret route not set
    if (loading && isAdminLoading ) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin ) {
        return children;
    }


    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
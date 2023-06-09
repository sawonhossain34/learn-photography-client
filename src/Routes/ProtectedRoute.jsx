import useAuthProvider from "../Hooks/useAuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuthProvider();
    const location = useLocation();
// TODO : secret route not set
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default ProtectedRoute;
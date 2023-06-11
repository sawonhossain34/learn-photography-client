import { FcGoogle } from 'react-icons/fc';
import useAuthProvider from '../../Hooks/useAuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
    const { googleSignIn } = useAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const dbUserSave = { name: loggedUser?.displayName, email: loggedUser?.email, photoURL: loggedUser?.photoURL }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(dbUserSave)
                })
                    .then(res => res.json())
                    .then(() => {
                            navigate(from, { replace: true });
                    })



            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='text-center mb-3'>
                <button onClick={handleGoogleSignUp} className="btn btn-square btn-outline">
                    <FcGoogle className='text-3xl'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
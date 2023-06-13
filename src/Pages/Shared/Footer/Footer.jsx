import { FcGoogle } from "react-icons/fc";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
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
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(dbUserSave)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <footer className="bg-pink-200 ">
                <div className="footer p-10  text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className='text-center mb-3'>
                            <button onClick={handleGoogleSignUp} className="btn btn-square btn-outline">
                                <FcGoogle className='text-3xl'></FcGoogle>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" text-center p-4  text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
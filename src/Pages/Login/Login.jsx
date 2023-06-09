import { Link } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const {signIn} = useAuthProvider();

    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user logging sucessfully',
                showConfirmButton: false,
                timer: 1500
              })
            
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center  md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-7">
                                <input  className="btn btn-secondary outline-pink-500" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>New here? <Link className="text-pink-500" to='/signup'>create an account</Link></p>
                        
                    </div>
                </div>
            </div>
    );
};

export default Login;
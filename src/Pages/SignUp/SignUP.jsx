
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider";
import Swal from "sweetalert2";

const SignUP = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { createUser, updateUserProfile } = useAuthProvider();
    const navigate = useNavigate();


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const dbUserSave ={name:data.name,email:data.email, photoURL:data.photoURL}
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(dbUserSave)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'user updated sucessfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error.message))
            })
    };
    console.log(watch("password"));
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2 ml-5 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-1/2 outline-pink-500 flex-shrink-0  max-w-sm shadow-2xl bg-base-100 mt-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name"  {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className="text-yellow-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-yellow-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photoURL" name="photoURL" {...register("photoURL", { required: 'Photo URL is required' })} className="input input-bordered" />
                            {errors.photoURL && <span className="text-yellow-500">photoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="password" name="password" {...register('password', {
                                required: true, minLength: 6, pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    message:
                                        'Password must contain at least one capital letter and one special character',
                                },
                            })}
                                className="input input-bordered" />
                            {errors.password && <span className="text-yellow-500">Password is 6 character , capital letter and special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="cpassword" name="cpassword" {...register('cpassword', {
                                required: true,
                                validate: value => value === watch('password')
                            })}
                                className="input input-bordered" />
                            {errors.cpassword && <span className="text-yellow-500">Passwords do not match</span>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type="submit" value="submit" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already  <Link className="text-pink-500" to='/login'>have an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
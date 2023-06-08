import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2 ml-5 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-1/2 outline-pink-500 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name"  {...register("name")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" {...register("password")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="password" name="confirmPwd" {...register("confirmPwd")} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-secondary" type="submit" value="submit" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already  <Link className="text-pink-500" to='/login'>have an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
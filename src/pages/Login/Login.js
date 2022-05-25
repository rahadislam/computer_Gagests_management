import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import glogo from '../../images/glogo.png'
import bimg from '../../images/about.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useJwt from '../../hooks/useJwt';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit: handleFrom } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let loginError;
    const [token]=useJwt(user || gUser)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <p>Loading......</p>
    }

    if(error || gError){
        loginError= <p className='text-red-400 font-bold'>{error?.message || gError?.message }</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='grid sm:grid-cols-1 gap-5 lg:grid-cols-2 px-16 py-10'>
            <div>
                <img src={bimg} alt=""  className='w-3/4 mx-auto'/>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleFrom(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Use a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-400 text-xl ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400 text-xl">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password is Must be 6 char'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400 text-xl">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400 text-xl">{errors.password.message}</span>}
                            </label>
                        </div>

                        {loginError}
                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>You have no Account then <Link className='text-primary' to="/register">Create a New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn text-white btn-outline btn-primary capitalize text-xl"
                    ><img src={glogo} alt="" className='w-5 mr-2'/> Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let errorMessage;



    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <h2 className='title'>Login</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group' onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            {errorMessage}
            <p className='m-0  text-white'>New to MotoZone?
                <Link className='form-link ms-1' to='/register'>Please Register</Link>
            </p>
            <p className='mt-2 text-white'>Forget Password?<button className='reset-btn'>Reset Password</button></p>

        </div>
    );
};

export default Login;
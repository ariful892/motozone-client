import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    let errorMessage;



    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading || sending) {
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

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='form-container'>
            <h2 className='title'>Login</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group' onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="email" placeholder='Your Email' required />
                <input type="password" name="password" placeholder='Password' required />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            {errorMessage}
            <p className='m-0  text-white'>New to MotoZone?
                <Link className='form-link ms-1' to='/register'>Please Register</Link>
            </p>
            <p className='mt-2 text-white'>Forget Password?<button className='reset-btn' onClick={handleResetPassword}>Reset Password</button></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
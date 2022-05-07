import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            const errorMessage = <p className='text-danger'>Your two password didn't match!</p>
            setErrorMessage(errorMessage);
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/home');
    }
    return (
        <div className='form-container'>
            <h2 className='title'>Register</h2>

            <form className='input-group' onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='mb-2' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                {errorMessage}
                <input className='form-btn' type="submit" value="Register" />
            </form>
            <p className='text-white'>Already have an account?
                <Link className='form-link ms-1' to='/login'>Login</Link>
            </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
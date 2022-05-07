import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (googleError || gitError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} </p>
    }

    if (googleLoading || gitLoading) {
        return <Loading></Loading>
    }

    if (googleUser || gitUser) {
        navigate('/home');
    }

    return (
        <div>
            <div className='mt-3 mb-3'>

                <div className='d-flex align-items-center me-4 ms-4'>
                    <div style={{ height: '1px' }} className='w-50 bg-white'>

                    </div>
                    <p className='mt-2 p-2'>or</p>
                    <div style={{ height: '1px' }} className='w-50 bg-white'>

                    </div>

                </div>

                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-success w-50 d-block mx-auto my-3'>
                        <img height={20} src={google} alt=''></img>
                        <span className='ps-2'>SignIn With Google</span>
                    </button>

                    <button
                        onClick={() => signInWithGithub()}
                        className='btn btn-secondary w-50 d-block mx-auto my-2'>
                        <img height={19} src={github} alt=''></img>
                        <span className='ps-2'>SignIn With GitHub</span>
                    </button>
                </div>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;
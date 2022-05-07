import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 bg-dark text-white p-2'>
            <p>
                <small>Copyright <FontAwesomeIcon className='ms-2 me-2' icon={faCopyright}></FontAwesomeIcon> {new Date().getFullYear()}</small>
            </p>

        </footer>
    );
};

export default Footer;
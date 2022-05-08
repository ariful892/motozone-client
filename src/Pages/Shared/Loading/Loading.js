import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: ' 400px ' }} className='w-100 text-center mt-5'>
            <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;
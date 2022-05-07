import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: ' 400px ' }} className='w-100 text-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;
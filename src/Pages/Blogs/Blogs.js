import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2 className='text-white text-center mb-4'>Some essential concepts of Javascript and Node.js</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between Javascript and Nodejs</Accordion.Header>
                    <Accordion.Body>
                        Javascript is a scripting language. It is a high level and just in time programming language. It can only run in the browsers. It is normally used in client side.
                        <br /><br />
                        Whereas Node.js is an opensource Javascript runtime platform. It allows Javascript code to run in the server side. Javascript can run outside the browser using Nodejs. It is normally used in server side.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should you use Nodejs and when should you use Mongodb</Accordion.Header>
                    <Accordion.Body>
                        We should use Nodejs in server side. Using Nodejs we can can perform different operation which is called CRUD operation. We can send request to the database to create, read, update , delete data that stored in database.
                        <br /><br />
                        We should use Mongodb to store data. We can easily store and can access data from mongodb. Using Nodejs we can create, read, update or delete data stored in Mongodb.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        SQL stands for Structured Query Language. It is also called as Relational data structure. It keeps the data in a Structured way so any change in the structure is difficult task.
                        <br /> <br />
                        NoSQL is also called as non-relational data structure. It doesn't keeps the data in Structured way so making any change in data is flexible.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;
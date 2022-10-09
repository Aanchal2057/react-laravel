import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = () => {
  return (
    <div className="container w-50 my-2 p-0">
    <Form>
    <Form.Group className="mb-3" controlId="formGroupName">
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" placeholder="Enter your name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupAddress">
       <Form.Label>Address</Form.Label>
       <Form.Control type="text" placeholder="Enter your address" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPhone">
       <Form.Label>Phone no</Form.Label>
       <Form.Control type="phone" placeholder="Enter your phone" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPassword">
       <Form.Label>Confirm Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <Button variant="warning" type="submit" className="text-white">
       Submit
     </Button>
    </Form>
   </div>
    
  );
};

export default Signup

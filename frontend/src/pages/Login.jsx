import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const Login = () => {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const login=(e)=>{
    e.preventDefault();
    async function fetchData(){
      const baseURL='http://127.0.0.1:8000/api/login';
      const config = { headers: { 'Content-Type': 'application/json' } };
      const response = await axios.post(baseURL,{email:email,password:password},config);
      console.log(response);
    } 
    fetchData();
  }
   
  return (
    <div className="container w-50 my-5">
     <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email}
          onChange={(e)=>setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
          onChange={(e)=>setPassword(e.target.value)} required
        />
      </Form.Group>
      <Button variant="warning" type="submit" className="text-white">
        Submit
      </Button>
     </Form>
    </div>
  );
};

export default Login;

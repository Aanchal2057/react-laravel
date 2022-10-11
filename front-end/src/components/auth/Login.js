import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setCurrentUser } from "../../store/users/user-action";

const Login = () => {
  const navigate=useNavigate(); 
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit=(e)=>{
    e.preventDefault();
 
    async function fetchData() {
     const URL = 'http://127.0.0.1:8000/api/login';
     const config = { headers: { 'Content-Type': 'application/json' } };
     const response = await axios.post(URL,{email:email,password:password},config);
     dispatch(setCurrentUser(response));
    
     
   }
   navigate('/');
   fetchData();
   }


  return (
    <div>
      <div className="container w-50 my-5">
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="warning" type="submit" className="text-white">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

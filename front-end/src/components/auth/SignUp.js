import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/users/user-action";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  // const {  name, email,address,phoneno,password,confirm_password } = User;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
 
  const register=(e)=>{
    e.preventDefault();
 
    async function fetchData() {
     const baseURL = 'http://127.0.0.1:8000/api/register';
     const config = { headers: { 'Content-Type': 'application/json' } };
     const response = await axios.post(baseURL,{name:name,email:email,password:password,address:address,phoneno:phoneno},config);
     dispatch(setCurrentUser(response));
    
     
   }
   navigate('/');
   fetchData();
   }
  
  return (
    <div>
    <div className="container w-50 my-2 p-0">
    <Form onSubmit={register}>
    <Form.Group className="mb-3" controlId="formGroupName">
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" value={name} 
       onChange={(e)=>setName(e.target.value)} required
       placeholder="Enter your name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" value={email}
          onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter email" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupAddress">
       <Form.Label>Address</Form.Label>
       <Form.Control type="text" value={address}
          onChange={(e)=>setAddress(e.target.value)} required placeholder="Enter your address" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPhone">
       <Form.Label>Phone no</Form.Label>
       <Form.Control type="phone" value={phoneno} 
          onChange={(e)=>setPhoneno(e.target.value)} required placeholder="Enter your phone" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" value={password} 
          onChange={(e)=>setPassword(e.target.value)} required placeholder="Password" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formGroupPassword">
       <Form.Label>Confirm Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <Button variant="warning" type="submit"  className="text-white">
       Submit
     </Button>
    </Form>
   </div>
     </div>
  );
};

export default SignUp;

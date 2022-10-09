import { useEffect } from "react";
import axios from 'axios';
useEffect(()=>{
  const getProducts=async function(){
    const baseURL="http://127.0.0.1:8000/api/data";
    const response=await axios.get(baseURL);
    const data=response.data;
    console.log("data",data);
  }
  getProducts();
},[]);
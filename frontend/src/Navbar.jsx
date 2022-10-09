import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link href="/Products">Products</Link>
    <Link href="/Login">Login</Link>
    </>
  )
};

export default Navbar;

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Roters';

const Layout = () => {
  return (
    <>
      <Header/>
      <div>
      <Routers></Routers>
      </div>
      <Footer/>
    </>
  )
}

export default Layout

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import './Root.css'
import Footer from '../../Components/Footer/Footer';
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className='min-h-[calc(100vh-356px)]'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../SharedPages/NavBar';
import Footer from '../SharedPages/Footer';

const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-235px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
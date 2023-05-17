import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../SharedPages/NavBar';
import Footer from '../SharedPages/Footer';

const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
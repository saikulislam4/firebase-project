import React from 'react';
import { Outlet} from 'react-router-dom';
import Footer from './Navbar/Footer/Footer';
import Navbar from './Navbar/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayOut;
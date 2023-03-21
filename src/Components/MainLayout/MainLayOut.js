import React from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const MainLayOut = () => {
    return (
        <>
            <div className="containear mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
          

        </>
    );
};

export default MainLayOut;
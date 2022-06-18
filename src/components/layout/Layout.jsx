import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './layout.css';
const Layout = () => {
    return (
        <div className='layout-container'>
            <Header/>
            <div className='layout-content-container'>
                <div className='layout-sidebar'>
                    <Sidebar/>
                </div>
                <main className='layout-content'>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default Layout;

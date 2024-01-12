import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Separator from './Separator';
import '../style/main.scss'

const Layout = () => {
    return (
        <div className='app-container'>
            <div className="navbar-container">
                <Navbar />
            </div>
                <Separator />
            <div className="layout">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
}

export default Layout;
import React from 'react';
import ContentTable from './subcomponents/ContentTable';
import Plus from '../icons/plus.png'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-layout">
                <h1>
                    Customer Overview
                </h1>
                <div className='dashboard-search'>
                    <input type="text" placeholder="Customer or ID"/>
                    <div class="dot"><img src={Plus} alt="" /></div>
                </div>
                <div className="dashboard-table">
                <ContentTable/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
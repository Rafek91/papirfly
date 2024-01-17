import React from 'react';
import '../style/Sidebar.scss';
import FileAddIcon from '../icons/file-add.svg'
import FileDot from '../icons/list-dot.svg'
import Notification from '../icons/notification.svg'
import Online from '../icons/online.svg'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <span className="sidebar-nav-name">
                    SITE ADMIN
                </span>
                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <img src={FileAddIcon} alt="" className="icon" />
                        <span className="nav-item-text">Customer overview</span>
                    </li>
                    <li className="nav-item">
                        <img src={FileDot} alt="" className="icon"/>
                        <span className="nav-item-text">Reports</span>
                    </li>
                    <li className="nav-item">
                        <img src={Notification} alt="" className="icon"/>
                        <span className="nav-item-text">File transcodings</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
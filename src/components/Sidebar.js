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
                <p>
                    SITE ADMIN
                </p>
                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <img src={FileAddIcon} alt="" className="icon" />
                        <span className="nav-item-text">option 1</span>
                    </li>
                    <li className="nav-item">
                        <img src={FileDot} alt="" />
                        <span className="nav-item-text">option 2</span>
                    </li>
                    <li className="nav-item">
                        <img src={Notification} alt="" />
                        <span className="nav-item-text">option 3</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
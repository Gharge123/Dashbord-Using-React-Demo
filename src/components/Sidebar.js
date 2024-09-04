import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faTasks, faUsers, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ onAddProject, onAddTask }) => {
    const [showProjectsMenu, setShowProjectsMenu] = useState(false);
    const [showTasksMenu, setShowTasksMenu] = useState(false);

    const toggleProjectsMenu = () => setShowProjectsMenu(!showProjectsMenu);
    const toggleTasksMenu = () => setShowTasksMenu(!showTasksMenu);

    return (
        <aside className="sidebar">
            <div className="logo">
                <h2>logip</h2>
            </div>
            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faHome} /><a href="#">Home</a></li>
                    <li className="menu-item">
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        <a href="#" onClick={toggleProjectsMenu}>Projects</a>
                        <button className="add-btn" onClick={onAddProject}><FontAwesomeIcon icon={faPlus} /></button>
                        {showProjectsMenu && (
                            <ul className="submenu">
                                <li><a href="#">View All Projects</a></li>
                                <li><a href="#">Archived Projects</a></li>
                            </ul>
                        )}
                    </li>
                    <li className="menu-item">
                        <FontAwesomeIcon icon={faTasks} />
                        <a href="#" onClick={toggleTasksMenu}>Tasks</a>
                        <button className="add-btn" onClick={onAddTask}><FontAwesomeIcon icon={faPlus} /></button>
                        {showTasksMenu && (
                            <ul className="submenu">
                                <li><a href="#">View All Tasks</a></li>
                                <li><a href="#">Completed Tasks</a></li>
                            </ul>
                        )}
                    </li>
                    <li><FontAwesomeIcon icon={faUsers} /><a href="#">Team</a></li>
                    <li><FontAwesomeIcon icon={faCog} /><a href="#">Settings</a></li>
                </ul>
            </nav>
            <button className="upgrade-btn">Upgrade to Pro</button>
            <a href="#" className="logout-link">Log out</a>
        </aside>
    );
}

export default Sidebar;

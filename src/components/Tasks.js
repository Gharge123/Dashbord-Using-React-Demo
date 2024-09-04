import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCalendarWeek, faCalendarDay, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Tasks.css';

const Tasks = () => {
    const [filter, setFilter] = useState('weekly');

    return (
        <section className="tasks-section">
            <div className="tasks-header">
                <h2>Current Tasks</h2>
                <div className="tasks-filters">
                    <FontAwesomeIcon icon={faFilter} />
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>
            <ul className="tasks-list">
                <li className="task-item">
                    <FontAwesomeIcon icon={faCalendarDay} className="task-icon" /> 
                    <span className="task-name">Product Review for UIB Market</span> 
                    <span className="task-status">- In progress</span> 
                    <span className="task-time">- 4h</span>
                </li>
                <li className="task-item">
                    <FontAwesomeIcon icon={faCalendarWeek} className="task-icon" /> 
                    <span className="task-name">UX Research for Product</span> 
                    <span className="task-status">- On hold</span> 
                    <span className="task-time">- 8h</span>
                </li>
                <li className="task-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="task-icon" /> 
                    <span className="task-name">App design and development</span> 
                    <span className="task-status">- Done</span> 
                    <span className="task-time">- 32h</span>
                </li>
            </ul>
        </section>
    );
}

export default Tasks;

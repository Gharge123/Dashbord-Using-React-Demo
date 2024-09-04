import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMicrophone, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Activity.css';

const Activity = () => {
    return (
        <aside className="activity-section">
            <h2>Activity</h2>
            <ul>
                <li>Floyd Miles commented on Stark Project</li>
                <li>Guy Hawkins added a file to 7Heroes Project</li>
                <li>Kristin Watson commented on Stark Project</li>
            </ul>
            <div className="chat-section">
                <ul className="chat-messages">
                    <li><strong>Megan:</strong> We need to review the project timeline.</li>
                    <li><strong>Floyd:</strong> Sure, let's do it.</li>
                </ul>
                <div className="chat-input">
                    <input type="text" placeholder="Type a message..." />
                    <div className="chat-actions">
                        <FontAwesomeIcon icon={faPaperclip} />
                        <FontAwesomeIcon icon={faMicrophone} />
                        <FontAwesomeIcon icon={faSmile} />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Activity;

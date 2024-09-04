import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faVideo, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="greeting">
                <h1>Hello, Margaret</h1>
                <p>Track team progress here. You almost reach a goal!</p>
            </div>
            <div className="profile">
                <img src="profile-pic.png" alt="Megan Norton" />
                <p>Megan Norton</p>
                <div className="profile-icons">
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faVideo} />
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
        </header>
    );
}

export default Header;

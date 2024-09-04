import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Performance from './components/Performance';
import Tasks from './components/Tasks';
import Activity from './components/Activity';

function App() {
    const handleAddProject = () => {
        // Add project logic
    };

    const handleAddTask = () => {
        // Add task logic
    };

    return (
        <div className="container">
            <Sidebar onAddProject={handleAddProject} onAddTask={handleAddTask} />
            <div className="main-content">
                <Header />
                <Performance />
                <Tasks />
            </div>
            <Activity />
        </div>
    );
}

export default App;

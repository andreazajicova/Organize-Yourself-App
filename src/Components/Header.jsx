import React from 'react';
import './stylesheet/Header.css';

export default function Header() {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date();
    return (
        <div className="App__header">
            <div className="App__date">
                {today.toLocaleDateString(undefined, options)}
            </div>
            <h1>My Todo List:</h1>
        </div>
    )
}


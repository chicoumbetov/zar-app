import React from 'react';
import headerstyles from './header.module.css';

const Header = () => {
    return (
        <header className={headerstyles.root}>
            <div className={headerstyles.forest}></div>
            <div className={headerstyles.container}>
                <h1>React JS marathon project</h1>
                <p>This marathon will be 1 week duration!</p>
            </div>
        </header>
    )
}

export default Header;

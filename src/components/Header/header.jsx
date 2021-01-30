import React from 'react';
import headerstyles from './header.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={headerstyles.root}>
            <div className={headerstyles.forest}></div>
            <div className={headerstyles.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

export default Header;

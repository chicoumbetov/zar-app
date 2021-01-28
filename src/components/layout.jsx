import React from 'react';
import layoutstyles from './layout.module.css';

const Layout = ({id, title, descr}) => {
    return (
        <section id={id} className={layoutstyles.root} >
            <div className={layoutstyles.wrapper}>
                <article>
                    <div className={layoutstyles.title}>
                        <h3>{title}</h3>
                        <span className={layoutstyles.separator}></span>
                    </div>
                    <div className={layoutstyles.desc}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;

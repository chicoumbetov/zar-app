import React from 'react';
import layoutstyles from './layout.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
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
                <div>
                    <img src={urlBg} colorBg={colorBg} alt="pokemon"/>
                </div>
            </div>
        </section>
    )
}

export default Layout;

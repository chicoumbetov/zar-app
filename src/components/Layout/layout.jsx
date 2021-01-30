import React from 'react';
import layoutstyles from './layout.module.css';

const Layout = ({id, title, urlBg, colorBg, children }) => {
    //console.log('###: props', props);
    const sectionStyle = {};

    if (urlBg) {
        sectionStyle.backgroundImage = `url(${urlBg}`;
    }

    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <section 
            id={id} 
            className={layoutstyles.root}
            style={sectionStyle} 
        >
            <div className={layoutstyles.wrapper}>
                <article>
                    <div className={layoutstyles.title}>
                        <h3>{title}</h3>
                        <span className={layoutstyles.separator}></span>
                    </div>
                    <div className={`${layoutstyles.desc} ${layoutstyles.full}`}>
                        {children}
                    </div>
                    
                </article>
                
            </div>
        </section>
    )
}

export default Layout;

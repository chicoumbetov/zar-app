import React from 'react'
import styles from './style.module.css';
import {ReactComponent as ReactSvg} from '../logo.svg';

const HeaderBlock = ({title, hideBackground = false, descr }) => {
    console.log('####: props', title)
    const styleRoot = hideBackground 
                ? { backgroundImage: 'none' } 
                : {};
    return (
        <div className={styles.root} style={styleRoot}>
            <div className={styles.container}>
                <ReactSvg />
                
                { title 
                    &&  (<h1 className={styles.header}> 
                            {title}
                       </h1>) 
                }

                {descr && <p className={styles.paragraph}>{ descr }</p>}

            </div>
            
        </div>
    )
}

export default HeaderBlock

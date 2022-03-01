import React from 'react';
import styles from './pagetitle.module.css'

function Pagetitle(props){
    return(
        <div className={styles.box}>
            <h1 className={styles.title}>
                {props.title}
            </h1>
            
        </div>
    )
}
export default Pagetitle;
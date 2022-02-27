import React from 'react';
import styles from './welcome.module.css'

function Welcome(){
    return(
        <box className = {styles.box}>
            <div className={styles.div}>
                <h1>
                    Sound of Eggert!
                </h1>
                Welcome to the sound of Eggert project!
                <br/>
                Our webapp makes ranking and browsing music easy.
                <br/>
                
            </div>
        </box>
    )
}

export default Welcome;
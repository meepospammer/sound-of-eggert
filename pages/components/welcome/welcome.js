import React from 'react';
import styles from './welcome.module.css'

function Welcome(){
    return(
        <box className = {styles.box}>
            
            <div className={styles.div}>
                <h1 className={styles.h1}>
                    The Sound of Eggert
                </h1>
                
                <h2>
                    Rate your favorite albums
                </h2>
                <h2>
                    Follow world rankings
                </h2>
                <h2>
                    Share your opinions
                </h2>
                
            </div>
            <img src="https://www.shareicon.net/data/2016/08/18/813422_music_512x512.png" alt="note"
                 />
        </box>
    )
}

export default Welcome;
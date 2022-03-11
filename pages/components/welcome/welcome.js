import React from 'react';
import styles from './welcome.module.css'

function Welcome(){
    return(
        <box className = {styles.box}>
            
            <div className={styles.div}>
                <h1 className={styles.h1}>
                    The Sound of Eggert
                </h1>
                
                <h4>
                    Rate your favorite albums
                </h4>
                <h4>
                    Follow world rankings
                </h4>
                <h4>
                    Share your opinions
                </h4>
                
            </div>
            <img src="https://www.shareicon.net/data/2016/08/18/813422_music_512x512.png" alt="note"
                 />
        </box>
    )
}

export default Welcome;
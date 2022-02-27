import React from 'react';
import styles from './welcome.module.css'

function Welcome(){
    return(
        <box className = {styles.box}>
            <div className={styles.div}>
                <h1>
                    The Sound of Eggert
                </h1>
                <img src="https://www.shareicon.net/data/2016/08/18/813422_music_512x512.png" alt="note"/>
                <h1>
                    Rank your favorite albums
                </h1>
                <h1>
                    Follow world rankings
                </h1>
                <h1>
                    Share your opinions
                </h1>
                
            </div>
        </box>
    )
}

export default Welcome;
import React from 'react';
import styles from './profile.module.css'


function Profile(){
    return(
        <p className={styles.profilebg}>
            <p className = {styles.gridcontainer}>
            <div className={styles.profilepic}>
                <img src = "https://i.pinimg.com/originals/c4/52/d9/c452d960341253411996bf39fc97e028.jpg"
                 width="200" height="250"
                 alt="pfp"/>
            </div>
            <div className={styles.header}>
                <h1>
                    Bladee Enjoyer
                </h1>
            </div>
            <div className={styles.description}>
                Born 1985, Copenhaegen, Denmarke (description) this is a bunch of text and is a test of what happens if I go too far
            </div>
            </p>
        </p>
    )
}
export default Profile;
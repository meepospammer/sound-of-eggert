import React from 'react';
import styles from './profile.module.css'


function Profile(){
    return(
        <div className = {styles.gridcontainer}>
         <div className={styles.profilepic}>
             <img src = "https://i.pinimg.com/originals/c4/52/d9/c452d960341253411996bf39fc97e028.jpg" width="300" height="375" alt="pfp"/>
         </div>
         <div className={styles.header}>
             <h1>
                 Your Name
             </h1>
         </div>
         <div className={styles.description}>
             Here's a description of yourself
         </div>
        </div>
    )
}
export default Profile;
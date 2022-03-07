import React from 'react';
import styles from './profile.module.css'
import { useUser } from '@auth0/nextjs-auth0';


function Profile(){
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return(
        <p className={styles.profilebg}>
            <p className = {styles.gridcontainer}>
            <div className={styles.profilepic}>
                <img src = {user.profilepic}
                 alt="pfp"/>
            </div>
            <div className={styles.header}>
                <h1>
                    {user.name}
                </h1>
            </div>
            <div className={styles.description}>
                Users Liked albums should be here, when they are signed in
            </div>
            </p>
            <ul className={styles.ul} >
                <li className={styles.li}>
                    <a href="/api/auth/logout">Logout</a>
                </li>
            </ ul>
        </p>

    )
}
export default Profile;
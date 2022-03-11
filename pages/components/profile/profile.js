import React from 'react';
import styles from './profile.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import ClickableAlbum from '../clickablealbum/clickablealbum';

var ratedalbums= [{name: "1000 Gecs", artist: "100 Gecs", src: "https://f4.bcbits.com/img/a2604863078_10.jpg", rating: 9.3, link: "tracklists/gluee"},
                  {name: "Die Lit", artist: "Playboi Carti", src: "https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/cjswt6lszt0lnyfyz3bd.jpg", rating: 8.4, link:"tracklists/gluee"}]


function Profile(){

    var objlist = [];
    
    for(let i = 0; i < ratedalbums.length; i++){
        var obj = <ClickableAlbum name={ratedalbums[i].name} artist={ratedalbums[i].artist}
               src={ratedalbums[i].src} rating={ratedalbums[i].rating} link={ratedalbums[i].link} />
        objlist.push(obj)
    }


    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    //issues and things to add:
    //profile picture doesnt work, usually will be wrong size
        // might be better to just scrap profile pictures
    //let users write a small description
    //have users posts at the bottom?
    return(<>
        <p className={styles.profilebg}>
            <p className = {styles.gridcontainer}>
            <div className={styles.profilepic}>
                <img src = {user.picture}
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
        <h1 className={styles.h1}>
            Your Album Ratings:
        </h1>
        <ul className={styles.ratingsection}>
            {objlist}
        </ul>

    </>)
}
export default Profile;
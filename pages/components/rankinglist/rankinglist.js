import React from 'react';
import styles from './rankinglist.module.css'
import ClickableAlbum from '../clickablealbum/clickablealbum';

function rankinglist(){
    return(
        <ul className={styles.ul}>
            texr
            <ClickableAlbum name="Gluee" artist="Bladee"
             src="https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg"
             rating={10.0}/>

             <ClickableAlbum name="graduation" artist="Ye"
             src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" rating={8.4}/>
        </ul>
    )
}

export default rankinglist;
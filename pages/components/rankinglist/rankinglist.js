import React from 'react';
import styles from './rankinglist.module.css'
import ClickableAlbum from '../clickablealbum/clickablealbum';

function rankinglist(){
    return(
        //Sort albums by ranking and then display in order
        <ul className={styles.ul}>
            <ClickableAlbum name="Gluee" artist="Bladee"
             src="https://i1.sndcdn.com/artworks-000068528208-1w4h5h-t500x500.jpg"
             rating={10.0}/>

             <ClickableAlbum name="Graduation" artist="Ye"
             src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" rating={8.4}/>

             <ClickableAlbum name="Donda" artist="Ye"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1920px-Solid_black.svg.png"
             rating={7.9}/>
        </ul>
    )
}

export default rankinglist;
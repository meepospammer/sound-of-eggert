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

             <ClickableAlbum name="Graduation" artist="Kanye West"
             src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" rating={8.4}/>

             <ClickableAlbum name="Red Light" artist="Bladee"
             src="https://upload.wikimedia.org/wikipedia/en/3/3a/Red_Light_Bladee.jpg"
             rating={7.9}/>

             <ClickableAlbum name="Donda" artist="Kanye West"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1920px-Solid_black.svg.png"
             rating={7.9}/>

            <ClickableAlbum name="MBDTF" artist="Kanye West"
             src="https://m.media-amazon.com/images/I/91dHRGIV65L._SL1500_.jpg"
             rating={6.0}/>
        </ul>
    )
}

export default rankinglist;
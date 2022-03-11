import React from 'react';
import styles from './rankinglist.module.css'
import ClickableAlbum from '../clickablealbum/clickablealbum';

function rankinglist(props){
    var albums = props.albums
    console.log("nice")
    console.log(albums[0].rating)
    var objlist = [];
    for(let i = 0; i < albums.length; i++){
        var linkname = "tracklists/" + albums[i].title
        var obj = <ClickableAlbum name={albums[i].title} artist={albums[i].Artist}
               src={albums[i].img_src}
                rating={albums[i].rating} link={linkname}/>
        objlist.push(obj)
    }


    return(
        //Sort albums by ranking and then display in order
        <ul className={styles.ul}>
            {objlist}
        </ul>
    )
}

export default rankinglist;